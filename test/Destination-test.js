import chai from 'chai';
const expect = chai.expect;

import Destination from '../src/Destination';
import {destinationData} from './test-data';

describe('Destination', () => {
    let destination;
  
    beforeEach(() => {
        destination = new Destination(destinationData[0]);
    });
    
    it('should be a function', () => {
        expect(Destination).to.be.a('function');
    });

    it('should be an instance of Destination', () => {
        expect(destination).to.be.an.instanceof(Destination);
    });

    it('should initialize with an id', () => {
        expect(destination.id).to.equal(1);
    });

    it('should initialize with a location', () => {
        expect(destination.location).to.equal('Lima, Peru');
    });

    it('should initialize with a lodging cost per day', () => {
        expect(destination.estimatedLodgingCostPerDay).to.equal(70);
    });

    it('should initialize with a flight cost per person', () => {
        expect(destination.estimatedFlightCostPerPerson).to.equal(400);
    });

    // it('should initialize with a flight cost per person', () => {
    //     expect(destination.estimatedFlightCostPerPerson).to.equal(400);
    // });

    // it('should initialize with a flight cost per person', () => {
    //     expect(destination.estimatedFlightCostPerPerson).to.equal(400);
    // });
});