import {currentUser} from './scripts';

let bookingCards= document.getElementById('bookingSection');


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
    console.log(currentUser.bookings)
    currentUser.bookings.forEach(booking => {
        return bookingCards.innerHTML +=
        `<article class="card" id="${booking.id}" tabindex="0">
       <h3>${booking.date}</h3>
        <h3>${booking.roomNumber}</h3>
        </article>`
    });

}

export {
    welcomeUser,
    displayBookings
}
// export default  domUpdates;