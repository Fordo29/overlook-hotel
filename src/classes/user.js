class User {
    constructor (user, bookingData) {
        this.id = user.id;
        this.name = user.name;
        this.bookings = [];
        this.availableRooms = []; 
        this.filteredRooms
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
        return acc
        }, 0)
        return Math.round(totalAmount*100)/100
    }

    checkForAvailableRooms(date, bookingData, roomData) {
        const bookedRooms = bookingData.filter(booking => booking.date === date)
        bookedRooms.forEach(bookedRoom => {
            roomData.forEach(room => {
                if(room.number !== bookedRoom.roomNumber) {
                    this.availableRooms.push(room)
                }})
        })
        console.log("available rooms", this.availableRooms)
        return this.availableRooms
    }
    
    filterByRoomType(roomType) {
        this.filteredRooms = this.availableRooms.filter(availableRoom => availableRoom.roomType === roomType)
        return this.filteredRooms
    }

}

export default User;