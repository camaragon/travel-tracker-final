import chai from 'chai';
const expect = chai.expect;

import Trip from '../src/Trip';
import Destination from '../src/Destination';
import {tripData} from './test-data';
import {destinationData} from './test-data';

describe('Trip', () => {
    let trip1;
    let trip2;
    let allDestinations;
  
    beforeEach(() => {
        allDestinations = new Destination(destinationData);
        trip1 = new Trip(tripData.trips[0], allDestinations);
        trip2 = new Trip(tripData.trips[1], allDestinations);
    });

    it('should be a function', () => {
        expect(Trip).to.be.a('function');
    });

    it('should be an instance of Trip', () => {
        expect(trip1).to.be.an.instanceof(Trip);
        expect(trip2).to.be.an.instanceof(Trip);
    });

    it('should initialize with an id', () => {
        expect(trip1.id).to.eq(1);
        expect(trip2.id).to.eq(5);
    });

    it('should initialize with a user id', () => {
        expect(trip1.userID).to.eq(44);
        expect(trip2.userID).to.eq(42);
    });

    it('should initialize with a destination id', () => {
        expect(trip1.destinationID).to.eq(49);
        expect(trip2.destinationID).to.eq(29);
    });

    it('should initialize with a number of travelers', () => {
        expect(trip1.travelers).to.eq(1);
        expect(trip2.travelers).to.eq(3);
    });

    it('should initialize with a date', () => {
        expect(trip1.date).to.eq("2019/09/16");
        expect(trip2.date).to.eq("2021/01/14");
    });

    it('should initialize with a duration', () => {
        expect(trip1.duration).to.eq(8);
        expect(trip2.duration).to.eq(18);
    });

    it('should initialize with a status', () => {
        expect(trip1.status).to.eq("approved");
        expect(trip2.status).to.eq("approved");
    });

    it('should initialize with suggested activities', () => {
        expect(trip1.suggestedActivities).to.eql([]);
        expect(trip2.suggestedActivities).to.eql([]);
    });

    it('should be able to find the trip\'s total cost', () => {
        expect(trip1.calculateTotalTripCost(allDestinations)).to.eq(5819);
        expect(trip2.calculateTotalTripCost(allDestinations)).to.eq(5214);
    });

    it('should initialize with the total cost including the 10% agency fee', () => {
        expect(trip1.totalCost).to.eq(5819);
        expect(trip2.totalCost).to.eq(5214);
    });

    it('should initialize with the location for the trip', () => {
        expect(trip1.location).to.eq("Castries, St Lucia");
        expect(trip2.location).to.eq("Willemstad, Curaçao");
    });

    it('should initialize with the image of the destination', () => {
        expect(trip1.image).to.eq("https://images.unsplash.com/photo-1524478075552-c2763ea171b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80");
        expect(trip2.image).to.eq("https://images.unsplash.com/photo-1541748603027-cbfefa3a6c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80");
    });

    it('should initialize with the alt tage for the destination image', () => {
        expect(trip1.alt).to.eq("aerial photography of rocky mountain under cloudy sky");
        expect(trip2.alt).to.eq("brightly colored buildings near body of water");
    });

    it('should be able to find the trip\'s that are present', () => {
        expect(trip1.createPresentTrips()).to.eql([]);
        expect(trip2.createPresentTrips()).to.eql([{
              id: 5,
              userID: 42,
              destinationID: 29,
              travelers: 3,
              date: '2021/01/14',
              duration: 18,
              status: 'approved',
              suggestedActivities: [],
              totalCost: 5214,
              location: 'Willemstad, Curaçao',
              image: 'https://images.unsplash.com/photo-1541748603027-cbfefa3a6c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80',
              alt: 'brightly colored buildings near body of water'
            }
        ]);

    });
    
    it('should be able to find the trip\'s that are in the past', () => {
        expect(trip1.createPastTrips()).to.eql([{
              id: 1,
              userID: 44,
              destinationID: 49,
              travelers: 1,
              date: '2019/09/16',
              duration: 8,
              status: 'approved',
              suggestedActivities: [],
              totalCost: 5819,
              location: 'Castries, St Lucia',
              image: 'https://images.unsplash.com/photo-1524478075552-c2763ea171b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80',
              alt: 'aerial photography of rocky mountain under cloudy sky'
            }
        ]);
        expect(trip2.createPastTrips()).to.eql([]);
    });

    it('should be able to find the trip\'s that are upcoming', () => {
        expect(trip1.createUpcomingTrips()).to.eql([]);
        expect(trip2.createUpcomingTrips()).to.eql([]);
    });

    it('should be able to find the trip\'s that are pending', () => {
        expect(trip1.createPendingTrips()).to.eql([]);
        expect(trip2.createPendingTrips()).to.eql([]);
    });
});


