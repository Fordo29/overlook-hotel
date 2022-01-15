import chai from 'chai';
const expect = chai.expect;
import Booking from '../src/classes/booking';
import {bookings} from './testData';


describe('Booking Class Testing', function() {
    let booking1;

    beforeEach(() => {
    booking1 = new Booking(bookings[0]);
    });

    it('should be a function', function() {
    expect(Booking).to.be.a('function');
    });

    it('should be an instance of Booking ', () => {
    expect(booking1).to.be.an.instanceof(Booking);
    });

    it('should store id that is unique to the booking', () => {
    expect(booking1.id).to.equal("5fwrgu4i7k55hl6sz");
    });

    it('should store the user ID that booked the room', () => {
    expect(booking1.userID).to.equal(9);
    });

    it('should store a date that the room is booked', function() {
    expect(booking1.date).to.equal("2022/04/22");
    });

    it('should store the room number that is booked', function() {
    expect(booking1.roomNumber).to.equal(15);
    });

    it('should start with no room service charges', function() {
    expect(booking1.roomServiceCharges.length).to.equal(0);
    });

    it('should return true', function() {
    expect(true).to.equal(true);
    });
});