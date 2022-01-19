# Overlook Hotel 


- Click [HERE](https://frontend.turing.edu/projects/overlook.html) to view the project spec
- Click [HERE](https://github.com/turingschool-examples/overlook-api) to access the Overlook-API (you will need this to run the website locally)

## Table of Contents
- [Abstract](#abstract)
- [Tech Used](#tech-used)
- [Installation and Set-Up](#installation-and-set-up)
- [Features](#features)
- [See the Site in Action](#see-the-site-in-action)
- [Future Goals](#future-goals)
- [Created By](#created-by)

## Abstract

Overlook Hotel is a hotel appointment application that allows a customer to book an room for a future visit.


## Tech Used

- JavaScript
- HTML
- Sass
- Mocha/Chai for testing
- Fetch API to retrieve and add data (bookings, customers, rooms)

## Installation and Set-Up

To install this project, please see below:

```bash
1. Clone down this Repository using `git clone`
2. Run `npm install` to install library dependancies
3. Next, run `npm start` and go to `http://localhost:8080/` to view the website
4. To access the data this site is built upon, clone down the Overlook-api using `git clone` into another terminal window (keep the localhost above running)
5. Run `npm install` and `npm start`
```
After following these steps, you should have access to the fully functioning website.
    

## Features

- Login page 
  - Separate login credentials for Customer vs. Manager (see instructions below)
- Customer Portal:
  - Customer can view all past, present, and future bookings on portal landing page
  - Customer can see how much money they've spent on all rooms
  - Customer can book rooms for today or upcoming dates, and can filter by room type while searching
  - 100% Chrome Lighthouse Accessibility Audit Score(before login screen was created)

## See the Site in Action
To log into the customer side, a user can log in using the following credentials: 

>username: customer50 (choose a number 01-50 to access different customers)
>
>password: overlook2021  

![LoginScreen_SparkVideo](https://user-images.githubusercontent.com/90149529/150047472-136fcd05-c561-4206-b057-d8862a8809ba.gif)


Upon Loggin in, the customer should see a dashboard/home page that shows:
- Any room bookings they have made (past or present/upcoming) and the total amount they have spent on rooms.  

![homepageOverlookHotel_AdobeCreativeCloudExpress](https://user-images.githubusercontent.com/90149529/150047869-98bc1faa-0d75-4a0f-8032-717e26e3936a.gif)


They should be able to select a date for which they would like to book a room.  Upon selecting a date: 
- the customer should be shown a list of room details for only rooms that are available on that date.
- Then they can filter down those available rooms by room type.   
![bookAndFilter_AdobeCreativeCloudExpress](https://user-images.githubusercontent.com/90149529/150048200-948823af-0262-4991-b249-921ba32d7295.gif)


Finally a customer should be able to select a room for booking. 

![BookARoom_AdobeCreativeCloudExpress](https://user-images.githubusercontent.com/90149529/150048730-075c9f1f-b27d-4228-8c8a-152b3b68e907.gif)

In the event that no rooms are available for the date/roomType selected, display a message fiercely apologizing to the user and asking them to adjust their room search.  
![noroomstobook_AdobeCreativeCloudExpress](https://user-images.githubusercontent.com/90149529/150048941-44694a00-7cd3-483b-a232-4b905c083bda.gif)


## Future Goals

- Create a manager login and views
- Apply some more cscc styling especially some fun animations 

## Created By:

- [Christine Rowland](https://github.com/fordo29)
