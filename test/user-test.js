import chai from 'chai';
const expect = chai.expect;
import User from '../src/classes/user';
import {customers, bookings, rooms} from './testData';

describe('User Class Testing', function() {
    let user1, user4;

    beforeEach(() => {
    user1= new User(customers[0], bookings);
    user4 = new User(customers[3], bookings)
    });

    it('should be a function', function() {
    expect(User).to.be.a('function');
    });

    it('should be an instance of User ', () => {
    expect(user1).to.be.an.instanceof(User);
    });

    it('should store an id number', () => {
    expect(user1.id).to.equal(1);
    });

    it('should store a user name', () => {
    expect(user1.name).to.equal('Leatha Ullrich');
    });

    it('should store all bookings ', function() {
    expect(user1.bookings.length).to.equal(0);
    });

    it('should return a list of bookings that the user has booked current and past', function() {
    user4.getUsersBookings(bookings)
    expect(user4.bookings.length).to.equal(3);
    });  
    
    it('should return an invite message to make a booking', function() {
    expect(user1.getUsersBookings(bookings)).to.equal(`The adventure awaits you! Book now`);
    });

    it('should return the total amount user has spent', function() {

    expect(user4.totalSpentByUser(bookings, rooms)).to.equal('849.54');
    });

    it('should show rooms available for booking', function() {
    user1.checkForAvailableRooms("2022/01/24", bookings, rooms)

    expect(user1.availableRooms.length).to.equal(5);
    });

    it('should return available rooms by room type', function() {
        user1.checkForAvailableRooms("2022/01/24", bookings, rooms)
        user1.filterByRoomType('residential suite')
    expect(user1.filteredRooms.length).to.equal(2);
    });
});