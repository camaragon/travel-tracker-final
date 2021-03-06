const fetchRequests = {
    getDestinations() {
      return fetch("http://localhost:3001/api/v1/destinations")
      .then(response => {
        if (!response.ok) {
          throw Error(`${response.status} ${response.statusText}`);
        }
        return response;
      })
      .then(response => response.json())
      .catch(error => alert(error));
    },
    
    getTrips() {
      return fetch("http://localhost:3001/api/v1/trips")
      .then(response => {
        if (!response.ok) {
          throw Error(`${response.status} ${response.statusText}`);
        }
        return response;
      })
      .then(response => response.json())
      .catch(error => alert(error));
    },

    getTraveler(id) {
      return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
      .then(response => {
        if (!response.ok) {
          throw Error(`${response.status} ${response.statusText}`);
        }
        return response;
      })
      .then(response => response.json())
      .catch(error => alert(error));
    },

    getTravelers() {
      return fetch("http://localhost:3001/api/v1/travelers")
      .then(response => {
        if (!response.ok) {
          throw Error(`${response.status} ${response.statusText}`);
        }
        return response;
      })
      .then(response => response.json())
      .catch(error => alert(error));
    },

    postTrip(trip) {
      fetch("http://localhost:3001/api/v1/trips", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(trip),
    }).then(response => {
      if (!response.ok) {
        throw Error(`${response.status} ${response.statusText}`);
      }
      return response;
    })
    .then(response => response.json())
    .catch(error => alert(error));
    }
};

export default fetchRequests; 