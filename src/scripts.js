

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
    selectDate,
    selectDateBtn,
    selectFilteredRooms,
    grabRoomTypeBtn,
    errorHandingLine,
    bookingBtns,
    bookingCards
} from './domUpdates';
import './images/background-image2.png';


let usersData;
let roomsData;
let bookingsData;
let currentUser;
let currentUserName;
let currentUserId;
let checkInDate;
let roomType;


//~~~~~~~~~~~~~~~~~~~ Event Listeners ~~~~~~~~~~~~~~~~~~~~~~~~~~~
window.addEventListener('load', loadPage);
selectDateBtn.addEventListener('click', function(e) {
    selectDates(e, bookingsData, roomsData)
});

grabRoomTypeBtn.addEventListener('click', filteredRooms);


function updateBookingButtons(bookingBtns) {
  bookingBtns.forEach((button) => {
    button.addEventListener('click', function (e) {
      bookARoom(e);
    });
  });
}


function fetchAllData() {
  const response = Promise.all([fetchUsersData(), fetchRoomsData(), fetchBookingsData()])
  return response;
}

function loadPage() {
  fetchAllData().then(data => {
    usersData = data[0].customers
    roomsData = data[1].rooms
    bookingsData = data[2].bookings
    getUser();
    welcomeUser(bookingsData, roomsData);
    displayBookings(bookingsData)
  });
}

function getUser() {
  let userIndex = getRandomIndex(usersData);
  currentUser = new User(usersData[userIndex]);
  currentUserName = currentUser.name;
  currentUserId = currentUser.id;
  console.log(currentUser)
  return currentUser;
}

function selectDates(event, bookingsData, roomsData) {
    event.preventDefault()
    checkInDate = selectDate.value.split("-").join("/")
    displayAvailableBookings(checkInDate, bookingsData, roomsData);
}

function filteredRooms() {
    roomType = selectFilteredRooms.value
    console.log(roomType)
    console.log(currentUser.availableRooms)
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
        displayBookings(bookingsData)
        successfulNewBooking()
        // displayAvailableBookings(checkInDate, bookingsData, roomsData);
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


// ~~~~~~~~~~~~~~~~ helper functions ~~~~~~~~~~~~~~~~~~~~
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}



export {currentUser, updateBookingButtons,  errorHanding1};

