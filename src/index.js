// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import fetchRequests from './fetchRequests';
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import Destination from './Destination';
import Trip from './Trip';
import Traveler from './Traveler';

console.log('This is the JavaScript entry file - your code begins here.');

let traveler;
let destinations;
let trips;

window.addEventListener('load', loadAllData);

function loadAllData() {
    Promise.all([fetchRequests.getDestinations(), fetchRequests.getTrips(), fetchRequests.getTravelers(49)])
    .then(values => {
        destinations = generateDestinations(values[0]);
        console.log(destinations);
        trips = generateTrips(values[1], destinations);
        console.log(trips);
        traveler = generateTraveler(values[2], trips);
        console.log(traveler)
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