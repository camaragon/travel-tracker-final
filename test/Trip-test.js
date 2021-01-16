import chai from 'chai';
const expect = chai.expect;

import Trip from '../src/Trip';
import {tripData} from './test-data';

describe('Trip', () => {
    let trip1;
    let trip2;
  
    beforeEach(() => {
        trip1 = new Trip(tripData[0]);
        trip2 = new Trip(tripData[4]);
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
        expect(trip2.date).to.eq("2020/04/30");
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
});