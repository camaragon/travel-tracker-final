const domUpdates = {
    displayGreeting(traveler) {
        let firstName = traveler.name.split(' ')[0];
        let newGreeting = `<h2>Welcome, ${firstName}!</h2>
        <p>You've spent $${traveler.totalAmountSpent} on trips in 2021!</p>`;
        greeting.insertAdjacentHTML('afterbegin', newGreeting);
    }
}

export default domUpdates;