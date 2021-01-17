class Destination {
    constructor(destinationData) {
        this.allDestinations = destinationData.destinations;
    }

    findDestinationById(id) {
        return this.allDestinations.find(destination => destination.id === id);
    }
};

module.exports = Destination;