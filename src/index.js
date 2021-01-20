import fetchRequests from './fetchRequests';
import domUpdates from './domUpdates';
import './css/base.scss';
import Destination from './Destination';
import Trip from './Trip';
import Traveler from './Traveler';
const moment = require("moment");
import './images/travel.png';
import './images/clouds.jpg';

const dateInput = document.querySelector('#date');
const durationInput = document.querySelector('#duration');
const numTravelersInput = document.querySelector('#num-of-travelers');
const calcCostBtn = document.querySelector('#calc-cost');
const submitBtn = document.querySelector('#submit-btn');
const username = document.querySelector('input[name="username"]')
const password = document.querySelector('input[name="password"]');
const loginBtn = document.querySelector('.login-button');


let traveler;
let destinations;
let trips;
let bookedDestination;
let loggedIn = false;

window.addEventListener('load', loadAllData);
calcCostBtn.addEventListener('click', buildEstimatedCost)
submitBtn.addEventListener('click', buildTripPostRequest);
dateInput.addEventListener('click', domUpdates.changeDateSelection);
loginBtn.addEventListener('click', logInTraveler);


function loadAllData(id) {
    if (loggedIn) {
        Promise.all([fetchRequests.getDestinations(), fetchRequests.getTrips(), fetchRequests.getTraveler(id)])
        .then(values => {
            destinations = generateDestinations(values[0]);
            trips = generateTrips(values[1], destinations);
            traveler = generateTraveler(values[2], trips);
            domUpdates.displayGreeting(traveler);
            domUpdates.displayPastTrips(traveler);
            domUpdates.displayUpcomingTrips(traveler);
            domUpdates.displayPresentTrips(traveler);
            domUpdates.displayPendingTrips(traveler);
            domUpdates.displayDestinations(destinations);
        });
    }
}

function generateDestinations(allDestinations) {
    return new Destination(allDestinations);
}

function generateTrips(allTrips, destinations) {
    return allTrips.trips.map(trip => new Trip(trip, destinations));
}

function generateTraveler(allTravelers, trips) {
    return new Traveler(allTravelers, trips);
    }

function getBookedDestination(event) {
    let all = document.getElementsByName('booked');
    all.forEach(button => {
        if (button.checked) {
            let id = parseInt(button.value);
            bookedDestination = destinations.findDestinationById(id);
        }
    })
}

function buildTripPostRequest(event) {
    event.preventDefault();
    getBookedDestination(event);
    if (durationInput.value && numTravelersInput.value && dateInput.value && bookedDestination) {
        let tripData = trips.find(trip => trip.destinationID === bookedDestination.id);
        let newTrip = new Trip(tripData, destinations);
        newTrip.id = trips.length + 1;
        newTrip.userID = traveler.id;
        newTrip.numberOfTravelers = numTravelersInput.value;
        newTrip.date = moment(dateInput.value).format('YYYY/MM/DD');
        newTrip.duration = durationInput.value;
        newTrip.status = 'pending';
        fetchRequests.postTrip(newTrip);
        fetchPendingCards(traveler.id);
    } else {
        event.preventDefault();
        domUpdates.displayErrorMessage();
    }
}

function checkTravelersUsername() {
    let word = username.value.match(/[a-zA-Z]+/g)[0];
    if (word === 'traveler' && username.value.match(/\d+/g)[0]) {
        return true;
    }
}

function logInTraveler(event) {
    event.preventDefault();
    if (username.value && password.value) {
        if (checkTravelersUsername() && username.value.match(/\d+/g)[0] > 0 &&
        username.value.match(/\d+/g)[0] <= 50) {
            let id = username.value.match(/\d+/g)[0];
            loggedIn = true;
            domUpdates.displayTravelerDashboard();
            loadAllData(id);
        } else {
            event.preventDefault();
            domUpdates.displayLoginError(username.value);
        }
    }
}

function buildEstimatedCost(event) {
    getBookedDestination(event);
    event.preventDefault();
    if (durationInput.value && numTravelersInput.value && dateInput.value && bookedDestination) {
        const lodgingCost = (bookedDestination.estimatedLodgingCostPerDay * durationInput.value);
        const flightCost = (bookedDestination.estimatedFlightCostPerPerson * numTravelersInput.value);
        const totalCost = Math.floor((lodgingCost + flightCost) * 1.1);
        domUpdates.displayEstimatedCost(totalCost);
    } else {
        event.preventDefault();
        domUpdates.displayErrorMessage();
    }
}

function fetchPendingCards(id) {
    document.querySelector('.body').style.cursor = 'wait';
    setTimeout(function() {
        document.querySelector('.body').style.cursor = 'pointer';
        loadAllData(id);
    }, 2000)
}

