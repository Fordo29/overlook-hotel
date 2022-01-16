import {errorHanding, errorHanding1} from './scripts'

function fetchUsersData() {
 return fetch("http://localhost:3001/api/v1/customers")
 .then(response => response.json())
 .catch(err => console.log(err));
}

function fetchRoomsData() {
  return fetch("http://localhost:3001/api/v1/rooms")
  .then(response => response.json())
  .catch(err => console.log(err));
 }

 function fetchBookingsData() {
  return fetch("http://localhost:3001/api/v1/bookings")
  .then(response => response.json())
  .catch(err => console.log(err));
 }

 const postBooking = (booking) => {
    return fetch('http://localhost:3001/api/v1/bookings', {
        method: 'POST',
        body: JSON.stringify(booking),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(response => errorHanding1(response))
        .then(data => console.log(data))
        .catch(err => errorHanding(err));
}



 export {fetchUsersData, fetchRoomsData, fetchBookingsData, postBooking};