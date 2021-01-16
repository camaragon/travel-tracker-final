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
});