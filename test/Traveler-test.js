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
  
    beforeEach(() => {
        traveler1 = new Traveler(travelerData.travelers[0]);
        traveler2 = new Traveler(travelerData.travelers[5]);
    });

    it('should be a function', () => {
        expect(Traveler).to.be.a('function');
    });

    it('should be an instance of Traveler', () => {
        expect(traveler1).to.be.an.instanceof(Traveler);
        expect(traveler2).to.be.an.instanceof(Traveler);
    });

    it('should initialize with an id', () => {
        expect(traveler1.id).to.eq(1);
        expect(traveler2.id).to.eq(6);
    });

    it('should initialize with a name', () => {
        expect(traveler1.name).to.eq('Ham Leadbeater');
        expect(traveler2.name).to.eq('Laverna Flawith');
    });

    it('should initialize with a traveler type', () => {
        expect(traveler1.travelerType).to.eq('relaxer');
        expect(traveler2.travelerType).to.eq('shopper');
    });
});