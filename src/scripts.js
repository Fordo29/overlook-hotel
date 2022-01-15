

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

import {fetchUsersData, fetchRoomsData, fetchBookingsData, postBooking} from './apiCalls';
import User from './classes/user';
import domUpdates from './domUpdates';

import './images/background-image.png';
let usersData;
let roomsData;
let bookingsData;
let currentUser;
let currentUserName;
let currentUserId;

console.log('This is the JavaScript entry file - your code begins here.');

window.addEventListener('load', loadPage);


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

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}