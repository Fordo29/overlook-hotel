import {currentUser, updateBookingButtons} from './scripts';

let bookingCards = document.getElementById('bookingSection');
let selectDateBtn = document.getElementById('checkInButton');
let selectDate = document.getElementById('checkInCalendar');
let allAvailableRooms = document.getElementById('availableBookings');
let selectFilteredRooms = document.getElementById('rooms');
let grabRoomTypeBtn = document.getElementById('grabRoomType');
let errorHandingLine = document.getElementById('errorHandingLine');
let bookingBtns = [];


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

function displayBookings(bookingsArr, roomData) {
    bookingCards.innerHTML = ``;
    currentUser.getUsersBookings(bookingsArr)
    currentUser.bookings.forEach(booking => {
        const foundRoom = roomData.find(room => {
            return room.number === booking.roomNumber
        })
        return bookingCards.innerHTML +=
        `<article class="card" tabindex="0">
        <h3>Date Booked: ${booking.date}</h3>
        <h3>Room Type: ${foundRoom.roomType}</h3>
        <h3>Cost Per Night: ${foundRoom.costPerNight}</h3>
        <h3>Booking Confirmation: ${booking.id}</h3>
        </article>`
    });

}

function displayAvailableBookings(date, bookingData, roomData) {
    allAvailableRooms.innerHTML = ``;
    currentUser.checkForAvailableRooms(date, bookingData, roomData);
    console.log(currentUser.availableRooms)
    if(currentUser.availableRooms.length > 0) {
    currentUser.availableRooms.forEach(room => {
        return allAvailableRooms.innerHTML += 
        `<article class="card" id="${room.number}" tabindex="0">
            <h3>Room Type: ${room.roomType}</h3>
            <h3>Bed Size: ${room.bedSize}</h3>
            <h3>Number of Beds: ${room.numBeds}</h3>
            <h3>Cost per Night: $${room.costPerNight}</h3>
            <button class='bookingBtn'>Book it!</button>
        </article>`
    })
    } else {
        return allAvailableRooms.innerHTML = 
        `We fiercely apologize!  All rooms are booked for the date selected.  Please make another selection`
    }
    bookingBtns = document.querySelectorAll('.bookingBtn');
    updateBookingButtons(bookingBtns);
}

function displayFilterRooms(roomType) {
    allAvailableRooms.innerHTML = ``;
    currentUser.filterByRoomType(roomType);
    if(currentUser.filteredRooms.length > 0) {
        currentUser.filteredRooms.forEach(room => {
            return allAvailableRooms.innerHTML += 
            `<article class="card" id="${room.number}" tabindex="0">
            <h3>Room Type: ${room.roomType}</h3>
            <h3>Bed Size: ${room.bedSize}</h3>
            <h3>Number of Beds: ${room.numBeds}</h3>
            <h3>Cost per Night: $${room.costPerNight}</h3>
            <button class='bookingBtn'>Book it!</button>
            </article>`  
        })
    } else {
        return allAvailableRooms.innerHTML = 
        `We fiercely apologize!  The room type you selected are booked.  Please make another selection`
    }
    bookingBtns = document.querySelectorAll('.bookingBtn');
    updateBookingButtons(bookingBtns);
}


export {
    welcomeUser,
    displayBookings,
    displayAvailableBookings,
    displayFilterRooms,
    selectDate, 
    selectDateBtn,
    selectFilteredRooms,
    grabRoomTypeBtn,
    bookingBtns,
    errorHandingLine,
    bookingCards
}
