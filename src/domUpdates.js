import {currentUser, updateBookingButtons} from './scripts';

let bookingCards = document.getElementById('bookingSection');
let selectDateBtn = document.getElementById('checkInButton');
let selectDate = document.getElementById('checkInCalendar');
let selectFilteredRooms = document.getElementById('rooms');
let grabRoomTypeBtn = document.getElementById('grabRoomType');
let errorHandingLine = document.getElementById('errorHandingLine');
let userMessage = document.getElementById('userMessage');
let userMessage2 = document.getElementById('userMessage2');
let allBookingsTitle = document.getElementById('allBookingsTitle');
let bookingSection = document.getElementById('bookingSection');
let availableTitle = document.getElementById('availableTitle');
let availableToBookSection = document.getElementById('availableToBookSection');
let loginSection = document.getElementById('loginSection');
let calendarView = document.getElementById('calendarView');
let roomFilterDropDown = document.getElementById('roomFilterDropDown');
let clickForRooms = document.getElementById('clickForRooms');
let loginName = document.getElementById('userName');
let loginPassword = document.getElementById('password');
let loginButton = document.getElementById('loginButton');
let loginErrorMessage = document.getElementById('loginErrorMessage');
let hero = document.querySelector('.hero');
let loginHere = document.querySelector('.loginHere');
let logOutBtn = document.getElementById('goodByeButton');
let goHomeBtn = document.getElementById('goHome');
let bookingBtns = [];

//~~~~~~~~~~~~~~~~~helper functions ~~~~~~~~~~~~~~~
function show(elements) {
  elements.forEach(element => element.classList.remove('hidden'));
}

function hide(elements) {
  elements.forEach(element => element.classList.add('hidden'));
}

function showLoginPage() {
  show([loginSection, loginHere]);
  hide([calendarView, roomFilterDropDown, allBookingsTitle, bookingSection, availableTitle, availableToBookSection, userMessage, clickForRooms, hero, logOutBtn, goHomeBtn]);
}

function showHomepage() {
  show([userMessage, allBookingsTitle, bookingSection, clickForRooms, hero, logOutBtn]);
  hide([calendarView, roomFilterDropDown, availableTitle, availableToBookSection, loginSection, goHomeBtn]);
}

function showAvailableRooms() {
  show([calendarView, availableToBookSection, bookingSection, userMessage, hero, logOutBtn]);
  hide([loginSection, allBookingsTitle, bookingSection, clickForRooms, goHomeBtn]);
}

//~~~~~~~~~~~~~~~~~ HOME PAGE FUNCTIONS ~~~~~~~~~~~~~~~~/
function welcomeUser(bookingData, roomData) {
    userMessage.innerHTML =
    `<h2>Welcome to Paradise <br>${currentUser.name}!</h2>`
    userMessage2.innerHTML =
    `<h2>Adventure Awaits You!</h2>
    <h3>Total Amount Spent:
    <br>$${currentUser.totalSpentByUser(bookingData, roomData)}</h3>`;

}

function displayBookings(bookingsArr, roomData) {
  bookingCards.innerHTML = ``;
  currentUser.getUsersBookings(bookingsArr)
  let sortedBookings = currentUser.bookings.sort((a, b) => new Date(a.date) - new Date(b.date))
  sortedBookings.forEach(booking => {
      const foundRoom = roomData.find(room => {
        return room.number === booking.roomNumber;
      });
        return bookingCards.innerHTML +=
        `<article class="card" tabindex="0">
        <h3 class="cardFont">Date Booked: ${booking.date}</h3>
        <h3 class="cardFont">Room Type: ${foundRoom.roomType}</h3>
        <h3 class="cardFont">Cost Per Night: $${foundRoom.costPerNight}</h3>
        <h3 class="cardFont">Booking Confirmation: ${booking.id}</h3>
        </article>`;
      });

}

function displayAvailableBookings(date, bookingData, roomData) {
  loginErrorMessage.innerHTML = ``;
  availableToBookSection.innerHTML = ``;
  currentUser.checkForAvailableRooms(date, bookingData, roomData);
  if (currentUser.availableRooms.length > 0) {
    currentUser.availableRooms.forEach(room => {
      return availableToBookSection.innerHTML +=
      `<article class="card" id="${room.number}" tabindex="0">
          <h3 class="cardFont">Room Type: ${room.roomType}</h3>
          <h3 class="cardFont">Bed Size: ${room.bedSize}</h3>
          <h3 class="cardFont">Number of Beds: ${room.numBeds}</h3>
          <h3 class="cardFont">Cost per Night: $${room.costPerNight}</h3>
          <button class='bookingBtn'>Book it!</button>
        </article>`;
    });
  } else {
    return availableToBookSection.innerHTML =
      `We fiercely apologize!  We would love to have you, however all rooms are booked for the date selected.  Please select another date.`;
  }

  show([availableTitle, roomFilterDropDown]);
  bookingBtns = document.querySelectorAll('.bookingBtn');
  updateBookingButtons(bookingBtns);
}

function displayFilterRooms(roomType) {
  availableToBookSection.innerHTML = ``;
  currentUser.filterByRoomType(roomType);
  if (currentUser.filteredRooms.length > 0) {
    currentUser.filteredRooms.forEach(room => {
          return availableToBookSection.innerHTML +=
            `<article class="card" id="${room.number}" tabindex="0">
            <h3>Room Type: ${room.roomType}</h3>
            <h3>Bed Size: ${room.bedSize}</h3>
            <h3>Number of Beds: ${room.numBeds}</h3>
            <h3>Cost per Night: $${room.costPerNight}</h3>
            <button class='bookingBtn'>Book it!</button>
            </article>`;
        });
  } else {
    return availableToBookSection.innerHTML =
      `We fiercely apologize!  The room type you selected is completely booked.  Please make another room selection.`;
  }

  bookingBtns = document.querySelectorAll('.bookingBtn');
  updateBookingButtons(bookingBtns);
}

function successfulNewBooking() {
  availableToBookSection.innerHTML = ``;
  hide([availableTitle]);
  availableToBookSection.innerHTML = `<p>Thank you for booking with us!  We are excited to see you soon!</p>`;
  show([goHomeBtn]);
}

function throwWrongDateErr() {
  availableToBookSection.innerHTML =
    `We fiercely apologize!  The date you have selected is unavailable.  Please select another date.`;
};

function clearLoginValues() {
  loginName.value = '';
  loginPassword.value = '';
}

function loginError() {
  loginErrorMessage.innerText =
    `You have entered an incorrect user name or password.
    Please try again.`;
};

export {
    welcomeUser,
    displayBookings,
    displayAvailableBookings,
    displayFilterRooms,
    successfulNewBooking,
    showHomepage,
    showAvailableRooms,
    showLoginPage,
    loginError,
    clearLoginValues,
    throwWrongDateErr,
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
    bookingCards,
    logOutBtn,
    goHomeBtn
};
