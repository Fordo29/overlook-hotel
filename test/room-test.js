import chai from 'chai';
const expect = chai.expect;
import Room from '../src/classes/room';
import {rooms} from './testData';


describe('Room Class Testing', function() {
    let room1;

    beforeEach(() => {
    room1= new Room(rooms[0]);
    });

    it('should be a function', function() {
    expect(Room).to.be.a('function');
    });

    it('should be an instance of Room ', () => {
    expect(room1).to.be.an.instanceof(Room);
    });

    it('should store room number', () => {
    expect(room1.number).to.equal(1);
    });

    it('should store the type of room', () => {
    expect(room1.type).to.equal('residential suite');
    });

    it('should store whether the room has a bidet', function() {
    expect(room1.bidet).to.equal(true);
    });

    it('should store the size of bed it has', function() {
    expect(room1.bedSize).to.equal("queen");
    });

    it('should store the number of beds in the room', function() {
    expect(room1.numBeds).to.equal(1);
    });

    it('should store a value for the cost per night to stay', function() {
    expect(room1.costPerNight).to.equal(358.4);
    });

    it.skip('should return true', function() {
    expect(true).to.equal(true);
    });
});