const moment = require("moment");
class Trip {
    constructor(trip, allDestinations) {
        this.id = trip.id;
        this.userID = trip.userID;
        this.destinationID = trip.destinationID;
        this.travelers = trip.travelers;
        this.date = trip.date;
        this.duration = trip.duration;
        this.status = trip.status;
        this.suggestedActivities = trip.suggestedActivities;
        this.totalCost = this.calculateTotalTripCost(allDestinations);
        this.location = allDestinations.findDestinationById(this.destinationID).destination;
        this.image = allDestinations.findDestinationById(this.destinationID).image;
        this.alt = allDestinations.findDestinationById(this.destinationID).alt;
    }

    calculateTotalTripCost(allDestinations) {
        const destination = allDestinations.findDestinationById(this.destinationID);
        const totalCost = Math.floor(((destination.estimatedLodgingCostPerDay * this.duration) + (destination.estimatedFlightCostPerPerson * this.travelers)) * 1.1);
        return totalCost;
    }

    createPresentTrips() {
        const presentTrips = [];
        const startDate = (Date.parse(this.date));
        let date = moment(this.date, 'YYYY/MM/DD').add(this.duration, 'days');
        const endDate = Date.parse(date);
        if (Date.now() >= startDate && Date.now() <= endDate) {
            presentTrips.push(this);
        }
        return presentTrips;
    }

    createPastTrips() {
        const pastTrips = [];
        let date = moment(this.date, 'YYYY/MM/DD').add(this.duration, 'days');
        const endDate = Date.parse(date);
        if (Date.now() > endDate) {
            pastTrips.push(this);
        }
        return pastTrips;
    }

    createUpcomingTrips() {
        const upcomingTrips = [];
        const startDate = (Date.parse(this.date));
        if (Date.now() < startDate && this.status.includes('approved')) {
            upcomingTrips.push(this);
        }
        return upcomingTrips;
    }

    createPendingTrips() {
        const pendingTrips = [];
        if (this.status.includes('pending')) {
            pendingTrips.push(this);
        }
        return pendingTrips;
    }
};

module.exports = Trip;