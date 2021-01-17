import chai from 'chai';
const expect = chai.expect;

import Destination from '../src/Destination';
import {destinationData} from './test-data';

describe('Destination', () => {
    let destination1;
    let destination2;
  
    beforeEach(() => {
        destination1 = new Destination(destinationData);
        destination2 = new Destination(destinationData);
    });
    
    it('should be a function', () => {
        expect(Destination).to.be.a('function');
    });

    it('should be an instance of Destination', () => {
        expect(destination1).to.be.an.instanceof(Destination);
        expect(destination2).to.be.an.instanceof(Destination);
    });

    it('should initialize with all of the destinations', () => {
        expect(destination1.allDestinations).to.eq(destinationData.destinations);
        expect(destination2.allDestinations).to.eq(destinationData.destinations);
    });

    it('should find a destination by the id', () => {
        expect(destination1.findDestinationById(1)).to.eql({
            id: 1,
            destination: "Lima, Peru",
            estimatedLodgingCostPerDay: 70,
            estimatedFlightCostPerPerson: 400,
            image: "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
            alt: "overview of city buildings with a clear sky"
        });
        expect(destination2.findDestinationById(2)).to.eql({
            id: 2,
            destination: "Stockholm, Sweden",
            estimatedLodgingCostPerDay: 100,
            estimatedFlightCostPerPerson: 780,
            image: "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            alt: "city with boats on the water during the day time"
        });
    });

    it('should be able to access an id', () => {
        expect(destination1.findDestinationById(1).id).to.eq(1);
        expect(destination2.findDestinationById(2).id).to.eq(2);
    });

    it('should be able to access a destination location', () => {
        expect(destination1.findDestinationById(1).destination).to.eq('Lima, Peru');
        expect(destination2.findDestinationById(2).destination).to.eq('Stockholm, Sweden');
    });

    it('should be able to access a lodging cost per day', () => {
        expect(destination1.findDestinationById(1).estimatedLodgingCostPerDay).to.eq(70);
        expect(destination2.findDestinationById(2).estimatedLodgingCostPerDay).to.eq(100);
    });

    it('should be able to access a flight cost per person', () => {
        expect(destination1.findDestinationById(1).estimatedFlightCostPerPerson).to.eq(400);
        expect(destination2.findDestinationById(2).estimatedFlightCostPerPerson).to.eq(780);
    });

    it('should be able to access an image of the destination', () => {
        expect(destination1.findDestinationById(1).image).to.eq("https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80");
        expect(destination2.findDestinationById(2).image).to.eq("https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
    });

    it('should be able to access an alt tag for the image', () => {
        expect(destination1.findDestinationById(1).alt).to.eq("overview of city buildings with a clear sky");
        expect(destination2.findDestinationById(2).alt).to.eq("city with boats on the water during the day time");
    });
});