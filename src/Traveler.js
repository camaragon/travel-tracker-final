const moment = require("moment");
class Traveler {
    constructor(traveler) {
        this.id = traveler.id;
        this.name = traveler.name;
        this.travelerType = traveler.travelerType;
    }

    findMyTrips(trips) {
        const myTrips = trips.filter(trip => trip.userID === this.id);
        return myTrips;
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
        // console.log(presentTrips);
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
        // console.log(pastTrips);
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
        // console.log(upcomingTrips);
        return upcomingTrips;
    }

    createPendingTrips(trips) {
        const pendingTrips = [];
        this.findMyTrips(trips).forEach(trip => {
            if (trip.status.includes('pending')) {
                pendingTrips.push(trip);
            }
        })
        // console.log(pendingTrips);
        return pendingTrips;
    }
}

module.exports = Traveler;