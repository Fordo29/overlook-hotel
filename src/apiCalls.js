import {errorHanding1} from './scripts'
import {errorHandingLine} from './domUpdates'

function fetchUsersData() {
 return fetch("http://localhost:3001/api/v1/customers")
 .then(response => response.json())
 .catch(err => console.log(err));
}

function fetchSingleUser(userID) {
 return fetch(`http://localhost:3001/api/v1/customers/${userID}`)
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

        .catch(err => {
            errorHandingLine.innerText = `You would love to have you stay with us. Please try again.` 
        } );
}



 export { fetchUsersData, fetchSingleUser, fetchRoomsData, fetchBookingsData, postBooking };