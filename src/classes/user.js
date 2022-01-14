import { bookings } from "../../test/testData";

class User {
    constructor (user) {
        this.id = user.id;
        this.name = user.name;
        this.bookings = [];
    }
}

export default User;