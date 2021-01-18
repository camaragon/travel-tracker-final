import fetchRequests from './fetchRequests';
import domUpdates from './domUpdates';
import './css/base.scss';
import Destination from './Destination';
import Trip from './Trip';
import Traveler from './Traveler';

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
calcCostBtn.addEventListener('click', getBookedDestination)


function loadAllData() {
    Promise.all([fetchRequests.getDestinations(), fetchRequests.getTrips(), fetchRequests.getTravelers(49)])
    .then(values => {
        destinations = generateDestinations(values[0]);
        trips = generateTrips(values[1], destinations);
        traveler = generateTraveler(values[2], trips);
        console.log(traveler);
        console.log(destinations)
        domUpdates.displayGreeting(traveler);
        domUpdates.displayPastTrips(traveler);
        domUpdates.displayUpcomingTrips(traveler);
        domUpdates.displayPresentTrips(traveler);
        domUpdates.displayPendingTrips(traveler);
        domUpdates.displayDestinations(destinations);
    });
}

// const bookedRadios = document.querySelectorAll('input[name="booked"]');

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
    event.preventDefault();
    let all = document.getElementsByName('booked');
    all.forEach(button => {
        if (button.checked) {
            let id = parseInt(button.value);
            bookedDestination = destinations.findDestinationById(id);
            console.log(bookedDestination);
        }
    })
    console.log(dateInput.value)
}

function requestTrip() {

}