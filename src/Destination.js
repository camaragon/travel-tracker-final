class Destination {
    constructor(destinationData) {
        this.allDestinations = destinationData;
    }

    findDestinationById(id) {
        return this.allDestinations.find(destination => destination.id === id);
    }
};

module.exports = Destination;