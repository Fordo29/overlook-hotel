import chai from 'chai';
const expect = chai.expect;
import User from '../src/classes/user';
import {customers} from './testData';

describe('User Class Testing', function() {
    let user1;

    beforeEach(() => {
    user1= new User(customers[0]);
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

    it.skip('should return true', function() {
    expect(true).to.equal(true);
    });
});