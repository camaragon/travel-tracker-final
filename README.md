# Travel Tracker - Ready, Set, Travel

## About
Ever need to book a trip, but can't stand the bland travel agency websites? Well look no further becasuse Ready, Set, Travel is here with a website that makes booking your next trip an adventure! At Ready, Set, Travel the motto is "Yeah, its that easy..." because everyone is saying that after using it. This was a solo project that gave me the opportunity to put everyhting I've learned at Turing so far, together. This was great practice on engraining TDD, web API fetch calls, SASS/SCSS, JavaScript iterator methods, modular file structuring, and so much more. The future traveler is met with a login page and the necessary credentials to sign on is the following:

Username: traveler## (## can be any number from 1 - 50)

Password: travel2020 (any password will work, but travel2020 is suggested)


![image of login page](https://i.gyazo.com/a820964a3af20ba16ad420ad7c55d449.jpg)

![image of dashboard](https://i.gyazo.com/c6264efc25b895c4d0d42516153ee325.jpg)

## How To Install
1. `fork` this repository
2. `git clone` it down to your command line
3. Navigate into the repository on your machine
4. Run `npm install`
5. Run `npm start`
6. Copy and paste the domain from terminal into browser.
7. Run 'npm start' for local server [here](https://github.com/turingschool-examples/travel-tracker-api) for API.
(Note: you have to follow Step 7 of the installation instructions for the site to work properly)

## Features
  * Traveler can login to the site using credentials from the login page.
  * Traveler is presented with a dashboard of all their present, pending, upcoming and past trips.
  * Traveler is given information on each trip.
  * Traveler can fill out a form about a possible new trip and even select from a list of destinations with pictures of each.
  * Traveler can get an estimated cost of the trip.
  * Traveler can then submit their trip request and see a new pending trip card in their dashboard.
  
## Code Architecture
  * `index.js`, `domUpdates.js`, `fetchRequests.js` - Deals with all of the DOM manipulation and is what allows for functionality on the webpage. `scripts.js` is pulling data from the data model and allowing it to be processed as manipulation on the DOM. `domUpdates.js` is where all the manipulation of the DOM elements is occuring and `fetchRequests.js` is where the API data is being fetched using `GET`. The seperation of files helps to maintain a more modular file structure.
  
  * `Traveler.js`, `Trip.js`, `Destination.js` - These are all of the class files which holds the data model and is directly manipulating any data that comes in from the API's.
  
  * `Traveler-test.js`, `Trip-test.js`, `Destination-test.js` - Testing for all of the class files, ensuring TDD and checking for any errors within the Data Model.
  
  * `index.html`, `base.scss` & all other `.scss` files - Used SASS for styling and broke them out into seperate files for mor modular file structuring. Used @mixins and SASS/SCSS variables for readability and code effectiveness.
  
## Technologies Used
1. JavaScript (vanilla)
2. HTML/CSS
3. Webpack
4. Chai & Mocha
5. SASS/SCSS
6. Normalize.scss
7. Moment.js

# Wins and Challenges
Definitely the hardest 5 days of work I think I have ever put into something before. This project left me feeling extremely accomplished, but completely exhausted at the same time. I felt very satisified with the HTML/SCSS layout of the site and my implementation of the class and testing files. I learned a lot about how to handle fetch calls, but it was something that I still had a hard time with. I want to learn the best practices of how a program should handle JavaScript fetch (GET, POST, DELETE) calls to the web API. All in all, I'm very pleased with this project due to how much I learned and the work ethic that I showed to myself, the whole thing was a win! 

## Future Iterations
 * Add an admin dashboard and functionality for the admin.
 * Allow user to delete a pending trip request.
 * Allow user to sign out of their dashboard and go back to the login page.

## Project Members
This project was designed and implemented by [Cameron Aragon](https://github.com/caragon4695) 

