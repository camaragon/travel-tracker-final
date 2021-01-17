class Trip {
    constructor(trip) {
        this.id = trip.id;
        this.userID = trip.userID;
        this.destinationID = trip.destinationID;
        this.travelers = trip.travelers;
        this.date = trip.date;
        this.duration = trip.duration;
        this.status = trip.status;
        this.suggestedActivities = trip.suggestedActivities;
    }

    calculateTotalTripCost(destinations) {
        console.log(this.destinationID)
        const destination = destinations.findDestinationById(this.destinationID);
        console.log(destination);
        const totalCost = Math.floor(((destination.estimatedLodgingCostPerDay * this.duration) + (destination.estimatedFlightCostPerPerson * this.travelers)) * 1.1);
        console.log(totalCost);
        return totalCost;
    }
};

module.exports = Trip;