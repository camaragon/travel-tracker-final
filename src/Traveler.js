class Traveler {
    constructor(traveler) {
        this.id = traveler.id;
        this.name = traveler.name;
        this.travelerType = traveler.travelerType;
    }

    findMyTrips(trips) {
        const myTrips = trips.filter(trip => trip.userID === this.id);
        console.log(myTrips);
        return myTrips;
    }

    // createPresentTrips(trips) {
    //     const myTrips = trips.filter(trip => trip.userID === this.id);
    //     const presentTrips = [];
    //     myTrips.forEach(trip => {
    //         let startDate = (Date.parse(trip.date));
    //         let date = moment(trip.date, 'YYYY/MM/DD').add(trip.duration, 'days');
    //         let endDate = Date.parse(date);
    //         if (Date.now() >= startDate && Date.now() <= endDate) {
    //             presentTrips.push(trip);
    //         }
    //     })
    //     console.log(presentTrips);
    //     return presentTrips;
    // }
}

module.exports = Traveler;