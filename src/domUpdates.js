import {currentUser, updateBookingButtons} from './scripts';

let bookingCards = document.getElementById('bookingSection');
let selectDateBtn = document.getElementById('checkInButton');
let selectDate = document.getElementById('checkInCalendar');
let allAvailableRooms = document.getElementById('availableBookings');
let selectFilteredRooms = document.getElementById('rooms');
let grabRoomTypeBtn = document.getElementById('grabRoomType');
let errorHandingLine = document.getElementById('errorHandingLine');
let userMessage = document.getElementById('userMessage');
let allBookingsTitle = document.getElementById('allBookingsTitle');
let bookingSection = document.getElementById('bookingSection');
let availableTitle = document.getElementById('availableTitle');
let availableToBookSection = document.getElementById('availableToBookSection');
let loginSection = document.getElementById('loginSection');
let calendarView = document.getElementById('calendarView');
let roomFilterDropDown = document.getElementById('roomFilterDropDown');
let clickForRooms = document.getElementById('clickForRooms');
let bookingBtns = [];
let loginName = document.getElementById('userName');
let loginPassword = document.getElementById('password');
let loginButton = document.getElementById('loginButton');

//~~~~~~~~~~~~~~~~~helper functions ~~~~~~~~~~~~~~~
function show(elements) {
  elements.forEach(element => element.classList.remove('hidden'));
}

function hide(elements) {
  elements.forEach(element => element.classList.add('hidden'));
}

function showLoginPage() {
show([loginSection]);
hide([calendarView, roomFilterDropDown, allBookingsTitle, bookingSection, availableTitle, availableToBookSection, userMessage, clickForRooms]);
}

function showHomepage() {
show([userMessage, allBookingsTitle, bookingSection, clickForRooms]);
hide([calendarView, roomFilterDropDown, allBookingsTitle, availableTitle, availableToBookSection, loginSection]);
}

function showAvailableRooms() {
show([calendarView, availableTitle, availableToBookSection, bookingSection, userMessage]);
hide([loginSection, allBookingsTitle, bookingSection, clickForRooms]);
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
    let sortedBookings = currentUser.bookings.sort((a, b) => new Date(a.date) - new Date(b.date))
    sortedBookings.forEach(booking => {
        const foundRoom = roomData.find(room => {
            return room.number === booking.roomNumber
        })
        return bookingCards.innerHTML +=
        `<article class="card" tabindex="0">
        <h3>Date Booked: ${booking.date}</h3>
        <h3>Room Type: ${foundRoom.roomType}</h3>
        <h3>Cost Per Night: $${foundRoom.costPerNight}</h3>
        <h3>Booking Confirmation: ${booking.id}</h3>
        </article>`
    });

}

function displayAvailableBookings(date, bookingData, roomData) {
    availableToBookSection.innerHTML = ``;
    currentUser.checkForAvailableRooms(date, bookingData, roomData);
    console.log(currentUser.availableRooms)
    if(currentUser.availableRooms.length > 0) {
    currentUser.availableRooms.forEach(room => {
        return availableToBookSection.innerHTML += 
        `<article class="card" id="${room.number}" tabindex="0">
            <h3>Room Type: ${room.roomType}</h3>
            <h3>Bed Size: ${room.bedSize}</h3>
            <h3>Number of Beds: ${room.numBeds}</h3>
            <h3>Cost per Night: $${room.costPerNight}</h3>
            <button class='bookingBtn'>Book it!</button>
        </article>`
    })
    } else {
        return availableToBookSection.innerHTML = 
        `We fiercely apologize!  All rooms are booked for the date selected.  Please make another selection`
    }
    show([roomFilterDropDown])
    bookingBtns = document.querySelectorAll('.bookingBtn');
    updateBookingButtons(bookingBtns);
}

function displayFilterRooms(roomType) {
    availableToBookSection.innerHTML = ``;
    currentUser.filterByRoomType(roomType);
    if(currentUser.filteredRooms.length > 0) {
        currentUser.filteredRooms.forEach(room => {
            return availableToBookSection.innerHTML += 
            `<article class="card" id="${room.number}" tabindex="0">
            <h3>Room Type: ${room.roomType}</h3>
            <h3>Bed Size: ${room.bedSize}</h3>
            <h3>Number of Beds: ${room.numBeds}</h3>
            <h3>Cost per Night: $${room.costPerNight}</h3>
            <button class='bookingBtn'>Book it!</button>
            </article>`  
        })
    } else {
        return availableToBookSection.innerHTML = 
        `We fiercely apologize!  The room type you selected are booked.  Please make another selection`
    }
    bookingBtns = document.querySelectorAll('.bookingBtn');
    updateBookingButtons(bookingBtns);
}

function successfulNewBooking () {
    availableToBookSection.innerHTML = ``;
    availableToBookSection.innerHTML = `<p>Thank you for booking with us!  We are excited to see you soon!</p>`

}


export {
    welcomeUser,
    displayBookings,
    displayAvailableBookings,
    displayFilterRooms,
    successfulNewBooking,
    showHomepage,
    showAvailableRooms,
    showLoginPage,
    loginName,
    loginPassword,
    loginButton,
    clickForRooms,
    selectDate, 
    selectDateBtn,
    selectFilteredRooms,
    grabRoomTypeBtn,
    bookingBtns,
    errorHandingLine,
    bookingCards
}
