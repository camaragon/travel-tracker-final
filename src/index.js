import fetchRequests from './fetchRequests';
import domUpdates from './domUpdates';
import './css/base.scss';
import Destination from './Destination';
import Trip from './Trip';
import Traveler from './Traveler';


let traveler;
let destinations;
let trips;

window.addEventListener('load', loadAllData);

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

function generateDestinations(allDestinations) {
    return new Destination(allDestinations);
  }

function generateTrips(allTrips, destinations) {
    return allTrips.trips.map(trip => new Trip(trip, destinations));
}

function generateTraveler(traveler, trips) {
    return new Traveler(traveler, trips);
}