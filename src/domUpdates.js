import {currentUser} from './scripts';

let bookingCards = document.getElementById('bookingSection');
let selectDateBtn = document.getElementById('checkInButton');
let selectDate = document.getElementById('checkInCalendar');
let allAvailableRooms = document.getElementById('availableBookings');


//~~~~~~~~~~~~~~~~~helper functions ~~~~~~~~~~~~~~~
function show(element) {
  element.classList.remove("hidden");
}

function hide(element) {
  element.classList.add("hidden");
}



//~~~~~~~~~~~~~~~~~ HOME PAGE FUNCTIONS ~~~~~~~~~~~~~~~~/
function welcomeUser(bookingData, roomData) {
  userMessage.innerHTML =
    `<h2>Welcome to paradise ${currentUser.name}!
      <br>Adventure Awaits You!</h2>
      <h3>Total Amount Spent: 
      <br>$${currentUser.totalSpentByUser(bookingData, roomData)}</h3>`;
}

function displayBookings(bookingsArr) {
    bookingCards.innerHTML = ``;
    currentUser.getUsersBookings(bookingsArr)
    currentUser.bookings.forEach(booking => {
        return bookingCards.innerHTML +=
        `<article class="card" id="${booking.id}" tabindex="0">
        <h3>Date Booked: ${booking.date}</h3>
        <h3>Room Number: ${booking.roomNumber}</h3>
        <h3>Booking Confirmation: ${booking.id}</h3>
        </article>`
    });

}

function displayAvailableBookings(date, bookingData, roomData) {
    allAvailableRooms.innerHTML = ``;
    currentUser.checkForAvailableRooms(date, bookingData, roomData);
    console.log(currentUser.availableRooms)
    currentUser.availableRooms.forEach(room => {
        return allAvailableRooms.innerHTML += 
        `<article class="card" id="${room.number}" tabindex="0">
        <h3>Room Type: ${room.roomType}</h3>
        <h3>Bed Size: ${room.bedSize}</h3>
        <h3>Number of Beds: ${room.numBeds}</h3>
        <h3>Cost per Night: ${room.costPerNight}</h3>
        </article>`
    })
}



export {
    welcomeUser,
    displayBookings,
    displayAvailableBookings,
    selectDate, 
    selectDateBtn,
    bookingCards
}
