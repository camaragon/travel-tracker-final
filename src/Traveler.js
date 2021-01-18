const moment = require("moment");
class Traveler {
    constructor(traveler, trips) {
        this.id = traveler.id;
        this.name = traveler.name;
        this.travelerType = traveler.travelerType;
        this.totalAmountSpent = this.calculateAmountSpentThisYear(trips);
        this.presentTrips = this.createPresentTrips(trips);
        this.pastTrips = this.createPastTrips(trips);
        this.upcomingTrips = this.createUpcomingTrips(trips);
        this.pendingTrips = this.createPendingTrips(trips);
    }
    
    findMyTrips(trips) {
        const myTrips = trips.filter(trip => trip.userID === this.id);
        return myTrips;
    }
    
    calculateAmountSpentThisYear(trips) {
        let filteredTrips = this.findMyTrips(trips).filter(trip => trip.date.includes('2021'));
        return filteredTrips.reduce((sum, trip) => {
            sum += trip.totalCost;
            return sum;
        }, 0)
    }

    createPresentTrips(trips) {
        const presentTrips = [];
        this.findMyTrips(trips).forEach(trip => {
            let startDate = (Date.parse(trip.date));
            let date = moment(trip.date, 'YYYY/MM/DD').add(trip.duration, 'days');
            let endDate = Date.parse(date);
            if (Date.now() >= startDate && Date.now() <= endDate) {
                presentTrips.push(trip);
            }
        })
        return presentTrips;
    }

    createPastTrips(trips) {
        const pastTrips = [];
        this.findMyTrips(trips).forEach(trip => {
            let date = moment(trip.date, 'YYYY/MM/DD').add(trip.duration, 'days');
            const endDate = Date.parse(date);
            if (Date.now() > endDate && trip.status.includes('approved')) {
                pastTrips.push(trip);
            }
        })
        return pastTrips;
    }

    createUpcomingTrips(trips) {
        const upcomingTrips = [];
        this.findMyTrips(trips).forEach(trip => {
            const startDate = (Date.parse(trip.date));
            if (Date.now() < startDate && trip.status.includes('approved')) {
                upcomingTrips.push(trip);
            }
        })
        return upcomingTrips;
    }

    createPendingTrips(trips) {
        const pendingTrips = [];
        this.findMyTrips(trips).forEach(trip => {
            if (trip.status.includes('pending')) {
                pendingTrips.push(trip);
            }
        })
        return pendingTrips;
    }
}

module.exports = Traveler;