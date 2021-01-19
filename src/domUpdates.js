const moment = require("moment");

const domUpdates = {

    displayGreeting(traveler) {
        const welcome = document.querySelector('.welcome');
        welcome.style.display = 'none';
        const greeting = document.querySelector('#greeting');
        let firstName = traveler.name.split(' ')[0];
        let newGreeting = `<h2>Welcome, ${firstName}!</h2>
        <p>You've spent $${traveler.totalAmountSpent} on trips in 2021</p>`;
        greeting.insertAdjacentHTML('afterbegin', newGreeting);
    },

    displayPastTrips(traveler) {
        const pastTrips = document.querySelector('#past-trips');
        if (traveler.pastTrips.length === 0) {
            const noTrips = `<div class="no-trips-card">
            <h3>No Past Trips</h3>
          </div>`
            pastTrips.insertAdjacentHTML("beforeend", noTrips);
        } else {
            traveler.pastTrips.forEach(trip => {
                let pastTrip = `<div class="trips-card">
                <img class="trip-img" src=${trip.image} alt=${trip.alt}>
                <p>${trip.location}</p>
                <p>Depart: ${moment(trip.date, 'll').format('l')}</p>
                <p>Travelers: ${trip.travelers}</p>
                <p>${trip.duration} Days</p>
                <p>Status: ${trip.status.toUpperCase()}</p>
                <p>Total: $${trip.totalCost}</p>
              </div>`
                pastTrips.insertAdjacentHTML("beforeend", pastTrip);
            })
        }
    },

    displayUpcomingTrips(traveler) {
        const upcomingTrips = document.querySelector('#upcoming-trips');
        if (traveler.upcomingTrips.length === 0) {
            const noTrips = `<div class="no-trips-card">
            <h3>No Upcoming Trips</h3>
          </div>`
            upcomingTrips.insertAdjacentHTML("beforeend", noTrips);
        } else {
            traveler.upcomingTrips.forEach(trip => {
                let upcomingTrip = `<div class="trips-card">
                <img class="trip-img" src=${trip.image} alt=${trip.alt}>
                <p>${trip.location}</p>
                <p>Depart: ${moment(trip.date, 'll').format('l')}</p>
                <p>Travelers: ${trip.travelers}</p>
                <p>${trip.duration} Days</p>
                <p>Status: ${trip.status.toUpperCase()}</p>
                <p>Total: $${trip.totalCost}</p>
              </div>`
                upcomingTrips.insertAdjacentHTML("beforeend", upcomingTrip);
            })
        }
    },

    displayPresentTrips(traveler) {
        const presentTrips = document.querySelector('#present-trips');
        if (traveler.presentTrips.length === 0) {
            const noTrips = `<div class="no-trips-card">
            <h3>No Present Trips</h3>
          </div>`
            presentTrips.insertAdjacentHTML("beforeend", noTrips);
        } else {
            traveler.presentTrips.forEach(trip => {
                let presentTrip = `<div class="trips-card">
                <img class="trip-img" src=${trip.image} alt=${trip.alt}>
                <p>${trip.location}</p>
                <p>Depart: ${moment(trip.date, 'll').format('l')}</p>
                <p>Travelers: ${trip.travelers}</p>
                <p>${trip.duration} Days</p>
                <p>Status: ${trip.status.toUpperCase()}</p>
                <p>Total: $${trip.totalCost}</p>
              </div>`
                presentTrips.insertAdjacentHTML("beforeend", presentTrip);
            })
        } 
    },

    displayPendingTrips(traveler) {
        const pendingTrips = document.querySelector('#pending-trips');
        if (traveler.pendingTrips.length === 0) {
            let noTrips = `<div class="no-trips-card">
            <h3>No Pending Trips</h3>
          </div>`
            pendingTrips.insertAdjacentHTML("beforeend", noTrips);
        } else {
            traveler.pendingTrips.forEach(trip => {
                let pendingTrip = `<div class="trips-card">
                <img class="trip-img" src=${trip.image} alt=${trip.alt}>
                <p>${trip.location}</p>
                <p>Depart: ${moment(trip.date, 'll').format('l')}</p>
                <p>Travelers: ${trip.travelers}</p>
                <p>${trip.duration} Days</p>
                <p>Status: ${trip.status.toUpperCase()}</p>
                <p>Total: $${trip.totalCost}</p>
              </div>`
                pendingTrips.insertAdjacentHTML("beforeend", pendingTrip);
            })
        } 
    },

    displayDestinations(destinations) {
        const destinationSection = document.querySelector('#destinations');
        destinations.allDestinations.forEach(destination => {
            let destinationHTML = `<div class="destinations-card">
            <p>${destination.destination}</p>
            <img class="destination-img" src=${destination.image} alt=${destination.alt}>
            <div class="stacked">
              <label for="${destination.id}">Book</label>
              <input type="radio" name="booked" value="${destination.id}" id="${destination.id}">
            </div>
          </div>`
          destinationSection.insertAdjacentHTML("beforeend", destinationHTML)
        })
    },

    changeDateSelection() {
      let dateSelection = document.querySelector('#date');
      let currentDate = moment().format().split('T')[0];
      dateSelection.setAttribute('min', currentDate);
    },
    
    displayEstimatedCost(total) {
      const estCost = document.querySelector('#form-info');
      estCost.innerText = `Estimated Trip Cost: $${total} (includes 10% agent fee)`;
      estCost.style.color = '#0000FF';
    },

    displayErrorMessage() {
      const errMsg = document.querySelector('#form-info');
      errMsg.innerText = '🚨 Looks like you forgot to select an input! 🚨';
      errMsg.style.color = '#ff0000';
    },

    displayTravelerDashboard() {
      document.querySelector('.login-page').classList.toggle('hidden');
      document.querySelector('.body').style.display = 'grid';
      document.querySelector('.sidebar').classList.toggle('hidden');
      document.querySelector('.form').classList.toggle('hidden');
      document.querySelector('.destinations').classList.toggle('hidden');
    },

    displayLoginError(username) {
      const login = document.querySelector('.login');
      let errMsg = `🚨 The username ${username} is invalid! 🚨`;
      login.insertAdjacentHTML('afterbegin', errMsg);
    }


}

export default domUpdates;