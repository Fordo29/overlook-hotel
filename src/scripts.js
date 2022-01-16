

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

import {fetchUsersData, fetchRoomsData, fetchBookingsData, postBooking} from './apiCalls';
import User from './classes/user';

import {
    welcomeUser,
    displayBookings,
    displayAvailableBookings,
    displayFilterRooms,
    selectDate,
    selectDateBtn,
    selectFilteredRooms,
    grabRoomTypeBtn,
    bookingCards
} from './domUpdates';
import './images/background-image2.jpg';


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
grabRoomTypeBtn.addEventListener('click', filteredRooms)

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
    console.log("selected value before", selectDate.value)
    checkInDate = selectDate.value.split("-").join("/")
    console.log("selected value after", checkInDate)
    
    displayAvailableBookings(checkInDate, bookingsData, roomsData);
}

function filteredRooms() {
    roomType = selectFilteredRooms.value
    console.log(roomType)
    console.log(currentUser.availableRooms)
    displayFilterRooms(roomType)
}

// ~~~~~~~~~~~~~~~~ helper functions ~~~~~~~~~~~~~~~~~~~~
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

export {currentUser};

