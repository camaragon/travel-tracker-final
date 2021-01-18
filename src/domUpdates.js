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
    }
}

export default domUpdates;