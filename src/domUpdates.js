const domUpdates = {
    displayGreeting(traveler) {
        const greeting = document.querySelector('#greeting');
        let firstName = traveler.name.split(' ')[0];
        let newGreeting = `<h2>Welcome, ${firstName}!</h2>
        <p>You've spent $${traveler.totalAmountSpent} on trips in 2021!</p>`;
        greeting.insertAdjacentHTML('afterbegin', newGreeting);
    },

    displayPastTrips(traveler) {
        const pastTrips = document.querySelector('#past-trips');
        traveler.pastTrips.forEach(trip => {
            let pastTrip = `<div class="trips-card">
            <img class="trip-img" src=${trip.image} alt=${trip.alt}>
            <p>${trip.location}</p>
            <p>Depart: ${trip.date}</p>
            <p>${trip.travelers} Travelers</p>
            <p>${trip.duration} Days</p>
            <p>Status: ${trip.status}</p>
          </div>`
            pastTrips.insertAdjacentHTML("beforeend", pastTrip);
        })
    },

    displayUpcomingTrips(traveler) {
        const upcomingTrips = document.querySelector('#upcoming-trips');
        traveler.upcomingTrips.forEach(trip => {
            let upcomingTrip = `<div class="trips-card">
            <img class="trip-img" src=${trip.image} alt=${trip.alt}>
            <p>${trip.location}</p>
            <p>Depart: ${trip.date}</p>
            <p>${trip.travelers} Travelers</p>
            <p>${trip.duration} Days</p>
            <p>Status: ${trip.status}</p>
          </div>`
            upcomingTrips.insertAdjacentHTML("beforeend", upcomingTrip);
        })
    },

    displayPresentTrips(traveler) {
        const presentTrips = document.querySelector('#present-trips');
        if (traveler.presentTrips.length === 0) {
            const noTrips = `<div class="no-trips-card">
            <h3>No Present Trips</h3>
          </div>`
            presentTrips.insertAdjacentHTML("beforeend", noTrips)
        } else {
            traveler.presentTrips.forEach(trip => {
                let presentTrip = `<div class="trips-card">
                <img class="trip-img" src=${trip.image} alt=${trip.alt}>
                <p>${trip.location}</p>
                <p>Depart: ${trip.date}</p>
                <p>${trip.travelers} Travelers</p>
                <p>${trip.duration} Days</p>
                <p>Status: ${trip.status}</p>
              </div>`
                presentTrips.insertAdjacentHTML("beforeend", presentTrip);
            })
        } 
    }
}

export default domUpdates;