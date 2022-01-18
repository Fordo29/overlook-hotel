

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
selectDateBtn.addEventListener('click', function(e) {
    selectDates(e, bookingsData, roomsData)
});

grabRoomTypeBtn.addEventListener('click', filteredRooms);
clickForRooms.addEventListener('click', showAvailableRooms);

loginButton.addEventListener('click', (e) => {
    logIn(e)
})

function updateBookingButtons(bookingBtns) {
  bookingBtns.forEach((button) => {
    button.addEventListener('click', function(e) {
      bookARoom(e);
    });
  });
}

logOutBtn.addEventListener('click', logout);
goHomeBtn.addEventListener('click', showHomepage);


//~~~~~~~~~~~~~~~~~~ functions ~~~~~~~~~~~~~~~~~~~
function fetchData(logNameCheck2) {
  const response = Promise.all([fetchSingleUser(logNameCheck2), fetchRoomsData(), fetchBookingsData()])
  return response;
}

// this can be used for the manager login
function fetchAllData() {
  const response = Promise.all([fetchUsersData(), fetchRoomsData(), fetchBookingsData()])
  return response;
}

function logIn(e) {
    e.preventDefault();
    let logNameCheck = loginName.value
    let logPasswordCheck = loginPassword.value
    let logNameCheck2 = parseInt(logNameCheck.substring(8))
    clearLoginValues()
    customerLookUp(logNameCheck2, logPasswordCheck, logNameCheck);

}

function customerLookUp(logNameCheck2, logPasswordCheck, logNameCheck) {
    if(logNameCheck2 > 0 && logNameCheck2 <= 50 && logNameCheck.startsWith('customer') && logPasswordCheck === 'overlook2021') {
        fetchData(logNameCheck2).then(data => {
            usersData = data[0]
            roomsData = data[1].rooms
            bookingsData = data[2].bookings
            currentUser = new User(usersData);
            showHomepage();
            welcomeUser(bookingsData, roomsData);
            displayBookings(bookingsData, roomsData);
        })
       
    } else {
        loginError();
    } 
    
}

function selectDates(event, bookingsData, roomsData) {
    event.preventDefault()
    checkInDate = selectDate.value.split("-").join("/")
    displayAvailableBookings(checkInDate, bookingsData, roomsData);
}

function filteredRooms() {
    roomType = selectFilteredRooms.value
    displayFilterRooms(roomType)
}

function bookARoom(e) {
   if(e.target.classList.contains('bookingBtn')) {
    const postThisBooking = { 
        userID: currentUser.id, 
        date: checkInDate, 
        roomNumber: parseInt(e.target.parentNode.id)
    }
    postBooking(postThisBooking).then(data => {
    fetchBookingsData().then(data => {
        bookingsData = data.bookings
        displayBookings(bookingsData, roomsData)
        successfulNewBooking()
    })
    })
   }
}

function errorHanding1(response) {
    if(response.status === 422) {
        throw new Error(`Could not process your booking.`)
    } else {
       return response.json()
    }
}

function logout() {
    showLoginPage()
}

// ~~~~~~~~~~~~~~~~ helper functions ~~~~~~~~~~~~~~~~~~~~
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}



export {currentUser, updateBookingButtons,  errorHanding1};

