const fetchRequests = {
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
    }
}