const customers = 
[
    {
    "id": 1,
    "name": "Leatha Ullrich"
    },
    {
    "id": 2,
    "name": "Rocio Schuster"
    },
    {
    "id": 3,
    "name": "Kelvin Schiller"
    },
    {
    "id": 9,
    "name": "Faustino Quitzon"
    },
];

const rooms = [
    {
    "number": 1,
    "roomType": "residential suite",
    "bidet": true,
    "bedSize": "queen",
    "numBeds": 1,
    "costPerNight": 358.4
    },
    {
    "number": 2,
    "roomType": "suite",
    "bidet": false,
    "bedSize": "full",
    "numBeds": 2,
    "costPerNight": 477.38
    },
    {
    "number": 3,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "king",
    "numBeds": 1,
    "costPerNight": 491.14
    },
    {
    "number": 15,
    "roomType": "residential suite",
    "bidet": true,
    "bedSize": "queen",
    "numBeds": 1,
    "costPerNight": 358.4
    },
    {
    "number": 24,
    "roomType": "suite",
    "bidet": false,
    "bedSize": "full",
    "numBeds": 2,
    "costPerNight": 477.38
    },
    {
    "number": 25,
    "roomType": "single room",
    "bidet": false,
    "bedSize": "king",
    "numBeds": 1,
    "costPerNight": 491.14
    }
]

const bookings = [
    {
"id": "5fwrgu4i7k55hl6sz",
"userID": 9,
"date": "2022/04/22",
"roomNumber": 15,
"roomServiceCharges": []
},
{
"id": "5fwrgu4i7k55hl6t5",
"userID": 43,
"date": "2022/01/24",
"roomNumber": 24,
"roomServiceCharges": []
},
{
"id": "5fwrgu4i7k55hl6t6",
"userID": 13,
"date": "2022/01/10",
"roomNumber": 12,
"roomServiceCharges": []
},
{
"id": "5fwrgu4i7k55hl6vu",
"userID": 9,
"date": "2022/01/16",
"roomNumber": 23,
"roomServiceCharges": []
},
{
"id": "5fwrgu4i7k55hl6wn",
"userID": 9,
"date": "2022/01/30",
"roomNumber": 25,
"roomServiceCharges": []
}
]





export {customers, rooms, bookings}