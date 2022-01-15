class User {
    constructor (user, bookingData) {
        this.id = user.id;
        this.name = user.name;
        this.bookings = [];
        // this.totalAmountSpent =  
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
        let totalAmount = this.bookings.reduce((acc, booking) => {
            roomData.forEach(room => {
                if (room.number === booking.roomNumber) {
                    acc += room.costPerNight
                }
            })
           console.log(acc)
        return acc
        }, 0)

      
        
        return Math.round(totalAmount*100)/100
    }



}

export default User;