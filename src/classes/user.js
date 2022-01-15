

class User {
    constructor (user, bookingData) {
        this.id = user.id;
        this.name = user.name;
        this.bookings = [];
    }

    getUsersBookings(bookingData) {
       const booker = bookingData.forEach(booked => {
           if (this.id === booked.userID) {
            this.bookings.push(booked)
           } 
        })
        if (this.bookings.length === 0) {
        return `The adventure awaits you! Book now`
        }
        
    }

    totalSpentByUser(bookingData, roomData) {
        this.getUsersBookings(bookingData);
        const totalAmount = this.bookings.reduce((acc, booking) => {
            roomData.forEach(room => {
                if (room.number === booking.roomNumber) {
                    acc += room.costPerNight
                }
            })
        return acc
        }, 0)
        return totalAmount
    }



}

export default User;