import chai from 'chai';
const expect = chai.expect;

import Trip from '../src/Trip';
import {tripData} from './test-data';

describe('Trip', () => {
    let trip;
  
    beforeEach(() => {
        trip = new Trip(tripData[0]);
    });

    it('should be a function', () => {
        expect(Trip).to.be.a('function');
    });

    it('should be an instance of Trip', () => {
        expect(trip).to.be.an.instanceof(Trip);
    });

    it('should initialize with an id', () => {
        expect(trip.id).to.eq(1);
    });

    it('should initialize with a user id', () => {
        expect(trip.userID).to.eq(44);
    });

    it('should initialize with a destination id', () => {
        expect(trip.destinationID).to.eq(49);
    });

    it('should initialize with a number of travelers', () => {
        expect(trip.travelers).to.eq(1);
    });

    it('should initialize with a date', () => {
        expect(trip.date).to.eq("2019/09/16");
    });

    it('should initialize with a duration', () => {
        expect(trip.duration).to.eq(8);
    });

    it('should initialize with a status', () => {
        expect(trip.status).to.eq("approved");
    });

    it('should initialize with suggested activities', () => {
        expect(trip.suggestedActivities).to.eql([]);
    });
});