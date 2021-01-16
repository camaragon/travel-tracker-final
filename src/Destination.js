class Destination {
    constructor(destination) {
        this.id = destination.id;
        this.location = destination.destination;
        this.estimatedLodgingCostPerDay = destination.estimatedLodgingCostPerDay;
        this.estimatedFlightCostPerPerson = destination.estimatedFlightCostPerPerson;
    }
}

module.exports = Destination;