const travelerData = {
    travelers: [
{
    "id": 42,
    "name": "Mignonne Thame",
    "travelerType": "photographer"
},
{
    "id": 44,
    "name": "Marijo MacNeilley",
    "travelerType": "photographer"
}
]}

const destinationData = {
    destinations: [
{
    id: 29,
    destination: "Willemstad, Curaçao",
    estimatedLodgingCostPerDay: 80,
    estimatedFlightCostPerPerson: 1100,
    image: "https://images.unsplash.com/photo-1541748603027-cbfefa3a6c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80",
    alt: "brightly colored buildings near body of water"
},
{
    id: 49,
    destination: "Castries, St Lucia",
    estimatedLodgingCostPerDay: 650,
    estimatedFlightCostPerPerson: 90,
    image: "https://images.unsplash.com/photo-1524478075552-c2763ea171b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
    alt: "aerial photography of rocky mountain under cloudy sky"
},
{
    "id": 33,
    "destination": "Brussels, Belgium",
    "estimatedLodgingCostPerDay": 1000,
    "estimatedFlightCostPerPerson": 110,
    "image": "https://images.unsplash.com/photo-1559113202-c916b8e44373?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "brown concrete gate"
},
{
    "id": 41,
    "destination": "Montego Bay, Jamaica",
    "estimatedLodgingCostPerDay": 500,
    "estimatedFlightCostPerPerson": 100,
    "image": "https://images.unsplash.com/photo-1557129604-0e50f1300fab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "alt": "boats docked beside trees on river"
},
{
    "id": 40,
    "destination": "La Isla Tortuga, Costa Rica",
    "estimatedLodgingCostPerDay": 600,
    "estimatedFlightCostPerPerson": 80,
    "image": "https://images.unsplash.com/photo-1536708880921-03a9306ec47d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1336&q=80",
    "alt": "trees near seashore"
},
{
    "id": 30,
    "destination": "Antananarivo, Madagascar",
    "estimatedLodgingCostPerDay": 70,
    "estimatedFlightCostPerPerson": 1200,
    "image": "https://images.unsplash.com/photo-1563656353898-febc9270a0f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "landscape photo of a city skyline"
}
]}

const tripData = {
    trips: [
{
    id: 1,
    userID: 44,
    destinationID: 49,
    travelers: 1,
    date: "2019/09/16",
    duration: 8,
    status: "approved",
    suggestedActivities: []
},
{
    "id": 46,
    "userID": 44,
    "destinationID": 33,
    "travelers": 2,
    "date": "2020/08/24",
    "duration": 11,
    "status": "approved",
    "suggestedActivities": []
},
{
    "id": 68,
    "userID": 44,
    "destinationID": 41,
    "travelers": 6,
    "date": "2020/09/19",
    "duration": 14,
    "status": "approved",
    "suggestedActivities": []
},
{
    id: 5,
    userID: 42,
    destinationID: 29,
    travelers: 3,
    date: "2021/01/14",
    duration: 18,
    status: "approved",
    suggestedActivities: []
},
{
    "id": 87,
    "userID": 42,
    "destinationID": 40,
    "travelers": 2,
    "date": "2020/03/17",
    "duration": 14,
    "status": "approved",
    "suggestedActivities": []
},
{
    "id": 132,
    "userID": 42,
    "destinationID": 30,
    "travelers": 5,
    "date": "2020/09/07",
    "duration": 5,
    "status": "pending",
    "suggestedActivities": []
}
]}

export {travelerData, destinationData, tripData};