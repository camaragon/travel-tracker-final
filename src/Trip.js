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
};

module.exports = Trip;