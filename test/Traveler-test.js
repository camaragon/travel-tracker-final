import chai from 'chai';
const expect = chai.expect;

import Traveler from '../src/Traveler';
import Trip from '../src/Trip';
import Destination from '../src/Destination';
import {travelerData} from './test-data';
import {tripData} from './test-data';
import {destinationData} from './test-data';

describe('Traveler', () => {
    let traveler1;
    let traveler2;
    let allDestinations;
    let trips; 
    let trav1Trips;
  
    beforeEach(() => {
        allDestinations = new Destination(destinationData);
        trips = tripData.trips.map(trip => new Trip(trip, allDestinations));
        traveler1 = new Traveler(travelerData.travelers[0]);
        traveler2 = new Traveler(travelerData.travelers[1]);
    });

    it('should be a function', () => {
        expect(Traveler).to.be.a('function');
    });

    it('should be an instance of Traveler', () => {
        expect(traveler1).to.be.an.instanceof(Traveler);
        expect(traveler2).to.be.an.instanceof(Traveler);
    });

    it('should initialize with an id', () => {
        expect(traveler1.id).to.eq(42);
        expect(traveler2.id).to.eq(44);
    });

    it('should initialize with a name', () => {
        expect(traveler1.name).to.eq('Mignonne Thame');
        expect(traveler2.name).to.eq('Marijo MacNeilley');
    });

    it('should initialize with a traveler type', () => {
        expect(traveler1.travelerType).to.eq('photographer');
        expect(traveler2.travelerType).to.eq('photographer');
    });

    it('should be able to find all of the traveler\'s trips', () => {
        expect(traveler1.findMyTrips(trips)).to.eql([]);
        expect(traveler2.findMyTrips(trips)).to.eql([]);
    });

    // it('should initialize with a present trips', () => {
    //     expect(traveler1.createPresentTrips(trips)).to.eql('relaxer');
    //     expect(traveler2.createPresentTrips()).to.eql('shopper');
    // });
});