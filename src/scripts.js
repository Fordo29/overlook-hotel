

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

import {fetchUsersData, fetchSingleUser, fetchRoomsData, fetchBookingsData, postBooking} from './apiCalls';
import User from './classes/user';

import {
    welcomeUser,
    displayBookings,
    displayAvailableBookings,
    displayFilterRooms,
    successfulNewBooking,
    showHomepage,
    showAvailableRooms,
    showLoginPage,
    loginError,
    throwWrongDateErr,
    clearLoginValues,
    loginName,
    loginPassword,
    loginButton,
    clickForRooms,
    selectDate,
    selectDateBtn,
    selectFilteredRooms,
    grabRoomTypeBtn,
    logOutBtn,
    goHomeBtn
} from './domUpdates';
import './images/background-image2.png';

let usersData;
let roomsData;
let bookingsData;
let currentUser;
let checkInDate;
let roomType;

//~~~~~~~~~~~~~~~~~~~ Event Listeners ~~~~~~~~~~~~~~~~~~~~~~~~~~~
window.addEventListener('load', showLoginPage);
selectDateBtn.addEventListener('click', function (e) {
  captureDates(e, bookingsData, roomsData);
});

grabRoomTypeBtn.addEventListener('click', filteredRooms);
clickForRooms.addEventListener('click', showAvailableRooms);

loginButton.addEventListener('click', (e) => {
    logIn(e);
  });

function updateBookingButtons(bookingBtns) {
  bookingBtns.forEach((button) => {
    button.addEventListener('click', function (e) {
      bookARoom(e);
    });
  });
}

logOutBtn.addEventListener('click', logout);
goHomeBtn.addEventListener('click', refreshClientInfo);

//~~~~~~~~~~~~~~~~~~ functions ~~~~~~~~~~~~~~~~~~~
function fetchData(logNameCheck2) {
  const response = Promise.all([fetchSingleUser(logNameCheck2), fetchRoomsData(), fetchBookingsData()]);
  return response;
}

// this can be used for the manager login
function fetchAllData() {
  const response = Promise.all([fetchUsersData(), fetchRoomsData(), fetchBookingsData()])
  return response;
}

function logIn(e) {
  e.preventDefault();
  let logNameCheck = loginName.value;
  let logPasswordCheck = loginPassword.value;
  let logNameCheck2 = parseInt(logNameCheck.substring(8));
  clearLoginValues();
  customerLookUp(logNameCheck2, logPasswordCheck, logNameCheck);

}

function customerLookUp(logNameCheck2, logPasswordCheck, logNameCheck) {
  if(logNameCheck2 > 0 && logNameCheck2 <= 50 && logNameCheck.startsWith('customer') && logPasswordCheck === 'overlook2021') {
    fetchData(logNameCheck2).then(data => {
      usersData = data[0]
      roomsData = data[1].rooms
      bookingsData = data[2].bookings
      currentUser = new User(usersData)
      showHomepage();
      welcomeUser(bookingsData, roomsData);
      displayBookings(roomsData);
    });
  } else {
    loginError();
  }
}

function captureDates(event, bookingsData, roomsData) {
  event.preventDefault();
  const editedDate = new Date(selectDate.value + "T00:00:00.000-07:00");
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (editedDate > today) {
    checkInDate = selectDate.value.split("-").join("/");
    displayAvailableBookings(checkInDate, bookingsData, roomsData);
  } else {
    throwWrongDateErr();
  }
}

function filteredRooms() {
  roomType = selectFilteredRooms.value;
  displayFilterRooms(roomType);
}

function bookARoom(e) {
  if (e.target.classList.contains('bookingBtn')) {
    const postThisBooking = {
      userID: currentUser.id,
      date: checkInDate,
      roomNumber: parseInt(e.target.parentNode.id),
    };
    postBooking(postThisBooking)
    successfulNewBooking();
  }
}

function refreshClientInfo() {
   fetchData(currentUser.id).then(data => {
      usersData = data[0]
      roomsData = data[1].rooms
      bookingsData = data[2].bookings
      currentUser = new User(usersData)
      showHomepage();
      welcomeUser(bookingsData, roomsData);
      displayBookings(roomsData);
   })
}

function errorHanding1(response) {
  if (response.status === 422) {
    throw new Error(`Could not process your booking.`);
  } else {
    return response.json();
  }
}

function logout() {
  showLoginPage();
}


export {currentUser, updateBookingButtons,  errorHanding1};
