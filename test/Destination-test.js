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
        expect(destination1.findDestinationById(29)).to.eql({
            id: 29,
            destination: "Willemstad, Curaçao",
            estimatedLodgingCostPerDay: 80,
            estimatedFlightCostPerPerson: 1100,
            image: "https://images.unsplash.com/photo-1541748603027-cbfefa3a6c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80",
            alt: "brightly colored buildings near body of water"
        });
        expect(destination2.findDestinationById(49)).to.eql({
            id: 49,
            destination: "Castries, St Lucia",
            estimatedLodgingCostPerDay: 650,
            estimatedFlightCostPerPerson: 90,
            image: "https://images.unsplash.com/photo-1524478075552-c2763ea171b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
            alt: "aerial photography of rocky mountain under cloudy sky"
        });
    });

    it('should be able to access an id', () => {
        expect(destination1.findDestinationById(29).id).to.eq(29);
        expect(destination2.findDestinationById(49).id).to.eq(49);
    });

    it('should be able to access a destination location', () => {
        expect(destination1.findDestinationById(29).destination).to.eq("Willemstad, Curaçao");
        expect(destination2.findDestinationById(49).destination).to.eq("Castries, St Lucia");
    });

    it('should be able to access a lodging cost per day', () => {
        expect(destination1.findDestinationById(29).estimatedLodgingCostPerDay).to.eq(80);
        expect(destination2.findDestinationById(49).estimatedLodgingCostPerDay).to.eq(650);
    });

    it('should be able to access a flight cost per person', () => {
        expect(destination1.findDestinationById(29).estimatedFlightCostPerPerson).to.eq(1100);
        expect(destination2.findDestinationById(49).estimatedFlightCostPerPerson).to.eq(90);
    });

    it('should be able to access an image of the destination', () => {
        expect(destination1.findDestinationById(29).image).to.eq("https://images.unsplash.com/photo-1541748603027-cbfefa3a6c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80");
        expect(destination2.findDestinationById(49).image).to.eq("https://images.unsplash.com/photo-1524478075552-c2763ea171b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80");
    });

    it('should be able to access an alt tag for the image', () => {
        expect(destination1.findDestinationById(29).alt).to.eq("brightly colored buildings near body of water");
        expect(destination2.findDestinationById(49).alt).to.eq("aerial photography of rocky mountain under cloudy sky");
    });
});