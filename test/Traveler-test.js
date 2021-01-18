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
  
    beforeEach(() => {
        allDestinations = new Destination(destinationData);
        trips = tripData.trips.map(trip => new Trip(trip, allDestinations));
        traveler1 = new Traveler(travelerData.travelers[0], trips);
        traveler2 = new Traveler(travelerData.travelers[1], trips);
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
        expect(traveler1.findMyTrips(trips)).to.eql([
            {
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
            },
            {
                id: 87,
                userID: 42,
                destinationID: 40,
                travelers: 2,
                date: '2020/03/17',
                duration: 14,
                status: 'approved',
                suggestedActivities: [],
                totalCost: 9416,
                location: 'La Isla Tortuga, Costa Rica',
                image: 'https://images.unsplash.com/photo-1536708880921-03a9306ec47d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1336&q=80',
                alt: 'trees near seashore'
            },
            {
                id: 132,
                userID: 42,
                destinationID: 30,
                travelers: 5,
                date: '2020/09/07',
                duration: 5,
                status: 'pending',
                suggestedActivities: [],
                totalCost: 6985,
                location: 'Antananarivo, Madagascar',
                image: 'https://images.unsplash.com/photo-1563656353898-febc9270a0f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                alt: 'landscape photo of a city skyline'
            }
        ]);
        expect(traveler2.findMyTrips(trips)).to.eql([
            {
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
            },
            {
                id: 46,
                userID: 44,
                destinationID: 33,
                travelers: 2,
                date: '2020/08/24',
                duration: 11,
                status: 'approved',
                suggestedActivities: [],
                totalCost: 12342,
                location: 'Brussels, Belgium',
                image: 'https://images.unsplash.com/photo-1559113202-c916b8e44373?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                alt: 'brown concrete gate'
            },
            {
                id: 68,
                userID: 44,
                destinationID: 41,
                travelers: 6,
                date: '2021/03/19',
                duration: 14,
                status: 'approved',
                suggestedActivities: [],
                totalCost: 8360,
                location: 'Montego Bay, Jamaica',
                image: 'https://images.unsplash.com/photo-1557129604-0e50f1300fab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                alt: 'boats docked beside trees on river'
            }
        ]);
    });

    it('should be able to find the total amount spent on trips this year for tax budgeting', () => {
        expect(traveler1.calculateAmountSpentThisYear(trips)).to.eq(5214);
        expect(traveler2.calculateAmountSpentThisYear(trips)).to.eq(8360);
    });

    it('should initialize with a total amount spent on trips this year', () => {
        expect(traveler1.totalAmountSpent).to.eq(5214);
        expect(traveler2.totalAmountSpent).to.eq(8360);
    });
    
    it('should be able to find the traveler\'s trips that are in the present', () => {
        expect(traveler1.createPresentTrips(trips)).to.eql([
            {
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
        expect(traveler2.createPresentTrips(trips)).to.eql([]);
    });

    it('should initialize with the present trips', () => {
        expect(traveler1.presentTrips).to.eql([
            {
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
        expect(traveler2.presentTrips).to.eql([]);
    });

    it('should be able to find the traveler\'s trips that are in the past', () => {
        expect(traveler1.createPastTrips(trips)).to.eql([
            {
              id: 87,
              userID: 42,
              destinationID: 40,
              travelers: 2,
              date: '2020/03/17',
              duration: 14,
              status: 'approved',
              suggestedActivities: [],
              totalCost: 9416,
              location: 'La Isla Tortuga, Costa Rica',
              image: 'https://images.unsplash.com/photo-1536708880921-03a9306ec47d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1336&q=80',
              alt: 'trees near seashore'
            }
          ]);
        expect(traveler2.createPastTrips(trips)).to.eql([
            {
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
            },
            {
              id: 46,
              userID: 44,
              destinationID: 33,
              travelers: 2,
              date: '2020/08/24',
              duration: 11,
              status: 'approved',
              suggestedActivities: [],
              totalCost: 12342,
              location: 'Brussels, Belgium',
              image: 'https://images.unsplash.com/photo-1559113202-c916b8e44373?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
              alt: 'brown concrete gate'
            }
          ]);
    });

    it('should initialize with the past trips', () => {
        expect(traveler1.pastTrips).to.eql([
            {
              id: 87,
              userID: 42,
              destinationID: 40,
              travelers: 2,
              date: '2020/03/17',
              duration: 14,
              status: 'approved',
              suggestedActivities: [],
              totalCost: 9416,
              location: 'La Isla Tortuga, Costa Rica',
              image: 'https://images.unsplash.com/photo-1536708880921-03a9306ec47d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1336&q=80',
              alt: 'trees near seashore'
            }
          ]);
        expect(traveler2.pastTrips).to.eql([
            {
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
            },
            {
              id: 46,
              userID: 44,
              destinationID: 33,
              travelers: 2,
              date: '2020/08/24',
              duration: 11,
              status: 'approved',
              suggestedActivities: [],
              totalCost: 12342,
              location: 'Brussels, Belgium',
              image: 'https://images.unsplash.com/photo-1559113202-c916b8e44373?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
              alt: 'brown concrete gate'
            }
          ]);
    });

    it('should be able to find the traveler\'s trips that are upcoming', () => {
        expect(traveler1.createUpcomingTrips(trips)).to.eql([]);
        expect(traveler2.createUpcomingTrips(trips)).to.eql([
            {
              id: 68,
              userID: 44,
              destinationID: 41,
              travelers: 6,
              date: '2021/03/19',
              duration: 14,
              status: 'approved',
              suggestedActivities: [],
              totalCost: 8360,
              location: 'Montego Bay, Jamaica',
              image: 'https://images.unsplash.com/photo-1557129604-0e50f1300fab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
              alt: 'boats docked beside trees on river'
            }
          ]);
    });

    it('should initialize with the upcoming trips', () => {
        expect(traveler1.upcomingTrips).to.eql([]);
        expect(traveler2.upcomingTrips).to.eql([
            {
              id: 68,
              userID: 44,
              destinationID: 41,
              travelers: 6,
              date: '2021/03/19',
              duration: 14,
              status: 'approved',
              suggestedActivities: [],
              totalCost: 8360,
              location: 'Montego Bay, Jamaica',
              image: 'https://images.unsplash.com/photo-1557129604-0e50f1300fab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
              alt: 'boats docked beside trees on river'
            }
          ]);
    });

    it('should be able to find the traveler\'s trips that are pending', () => {
        expect(traveler1.createPendingTrips(trips)).to.eql([
            {
              id: 132,
              userID: 42,
              destinationID: 30,
              travelers: 5,
              date: '2020/09/07',
              duration: 5,
              status: 'pending',
              suggestedActivities: [],
              totalCost: 6985,
              location: 'Antananarivo, Madagascar',
              image: 'https://images.unsplash.com/photo-1563656353898-febc9270a0f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
              alt: 'landscape photo of a city skyline'
            }
          ]);
        expect(traveler2.createPendingTrips(trips)).to.eql([]);
    });

    it('should initialize with the pending trips', () => {
        expect(traveler1.pendingTrips).to.eql([
            {
              id: 132,
              userID: 42,
              destinationID: 30,
              travelers: 5,
              date: '2020/09/07',
              duration: 5,
              status: 'pending',
              suggestedActivities: [],
              totalCost: 6985,
              location: 'Antananarivo, Madagascar',
              image: 'https://images.unsplash.com/photo-1563656353898-febc9270a0f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
              alt: 'landscape photo of a city skyline'
            }
          ]);
        expect(traveler2.pendingTrips).to.eql([]);
    });
});