import fetchRequests from './fetchRequests';
import domUpdates from './domUpdates';
import './css/base.scss';
import Destination from './Destination';
import Trip from './Trip';
import Traveler from './Traveler';
const moment = require("moment");
import './images/travel.png'

const dateInput = document.querySelector('#date');
const durationInput = document.querySelector('#duration');
const numTravelersInput = document.querySelector('#num-of-travelers');
const calcCostBtn = document.querySelector('#calc-cost');
const submitBtn = document.querySelector('#submit-btn');

let traveler;
let destinations;
let trips;
let bookedDestination;

window.addEventListener('load', loadAllData);
calcCostBtn.addEventListener('click', buildEstimatedCost)
submitBtn.addEventListener('click', buildTripPostRequest);
dateInput.addEventListener('click', domUpdates.changeDateSelection);

function loadAllData() {
    Promise.all([fetchRequests.getDestinations(), fetchRequests.getTrips(), fetchRequests.getTravelers(49)])
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

function generateDestinations(allDestinations) {
    return new Destination(allDestinations);
  }

function generateTrips(allTrips, destinations) {
    return allTrips.trips.map(trip => new Trip(trip, destinations));
}

function generateTraveler(traveler, trips) {
    return new Traveler(traveler, trips);
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


function buildTripPostRequest(event) {
    // event.preventDefault();
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
        // location.reload();
    } else {
        event.preventDefault();
        domUpdates.displayErrorMessage();
    }
}