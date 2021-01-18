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
calcCostBtn.addEventListener('click', buildEstimatedCost)


function loadAllData() {
    Promise.all([fetchRequests.getDestinations(), fetchRequests.getTrips(), fetchRequests.getTravelers(49)])
    .then(values => {
        generateDestinations(values[0]);
        generateTrips(values[1], destinations);
        generateTraveler(values[2], trips);
        // domUpdates.displayGreeting(traveler);
        // domUpdates.displayPastTrips(traveler);
        // domUpdates.displayUpcomingTrips(traveler);
        // domUpdates.displayPresentTrips(traveler);
        // domUpdates.displayPendingTrips(traveler);
        // domUpdates.displayDestinations(destinations);
    });
}

// const bookedRadios = document.querySelectorAll('input[name="booked"]');

function generateDestinations(allDestinations) {
    destinations = new Destination(allDestinations);
    domUpdates.displayDestinations(destinations);
  }

function generateTrips(allTrips, destinations) {
    trips = allTrips.trips.map(trip => new Trip(trip, destinations));

}

function generateTraveler(traveler, trips) {
    traveler = new Traveler(traveler, trips);
    domUpdates.displayGreeting(traveler);
    domUpdates.displayPastTrips(traveler);
    domUpdates.displayUpcomingTrips(traveler);
    domUpdates.displayPresentTrips(traveler);
    domUpdates.displayPendingTrips(traveler);
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
    // console.log(dateInput.value)
    // console.log(durationInput.value)
    // console.log(numTravelersInput.value)
}

function buildEstimatedCost(event) {
    console.log(durationInput.value)
    console.log(numTravelersInput.value)
    getBookedDestination(event);
    const lodgingCost = (bookedDestination.estimatedLodgingCostPerDay * durationInput.value);
    const flightCost = (bookedDestination.estimatedFlightCostPerPerson * numTravelersInput.value);
    const totalCost = Math.floor((lodgingCost + flightCost) * 1.1);
    domUpdates.displayEstimatedCost(totalCost);
}