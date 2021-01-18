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

    getTravelers(id) {
        return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
      .then(response => {
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