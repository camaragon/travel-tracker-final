# Travel Tracker - Ready, Set, Travel

## About
Ever need to book a trip, but can't stand the bland travel agency websites? Well look no further becasuse Ready, Set, Travel is here with a website that makes booking your next trip an adventure! At Ready, Set, Travel the motto is "Yeah, its that easy..." because everyone is saying that after using it. This was a solo project that gave me the opportunity to put everyhting I've learned at Turing so far, together. This was great practice on engraining TDD, web API fetch calls, SASS/SCSS, JavaScript iterator methods, modular file structuring, and so much more. The future traveler is et with a login page and the necessary credentials to sign on is the following:

Username: traveler## (## can be any number from 1 - 50)

Password: travel2020 (any password will work, but travel2020 is suggested)


Link to GitHub Pages Site [here](https://deadbelly.github.io/whats-cookin/).
(Note: you have to follow Step 7 of the installation instructions for the site to work properly)

![gif of site/random user](https://media.giphy.com/media/nh6LVl3mvjlg6wPsEB/giphy.gif)

This site was designed to be responsive to screen size, as seen below.

![gif of breakpoints](https://media.giphy.com/media/FyExsuM6CaQ6aGWOj8/giphy.gif)

## How To Install
1. `fork` this repository
2. `git clone` it down to your command line
3. Navigate into the repository on your machine
4. Run `npm install`
5. Run `npm start`
6. Copy and paste the domain from terminal into browser.
7. Run 'npm start' for local server [here](https://github.com/turingschool-examples/travel-tracker-api) for API.

## Features
  * Traveler is 
  
## Code Architecture
  * `scripts.js`, `domUpdates.js`, `fetchRequests.js` - Deals with all of the DOM manipulation and is what allows for functionality on the webpage. `scripts.js` is pulling data from the data model and allowing it to be processed as manipulation on the DOM. `domUpdates.js` is where all the manipulation of the DOM elements is occuring and `fetchRequests.js` is where the API data is being fetched using `GET`. The seperation of files helps to maintain a more modular file structure.
  
  * `user.js`, `recipe.js`, `ingredient.js`, `pantry.js` - These are all of the class files which holds the data model and is directly manipulating any data that comes in from the API's.
  
  * `user-test.js`, `recipe-test.js`, `ingredient-test.js`, `pantry-test.js` - Testing for all of the class files, ensuring TDD and checking for any errors within the Data Model.
  
  * `index.html`, `styles.scss` & all other `.scss` files - Used SASS for styling and broke them out into seperate files for mor modular file structuring. Used @mixins and SASS variables for readability and code effectiveness.
  
## Technologies Used
1. JavaScript (vanilla)
2. HTML/CSS
3. Webpack
4. Chai & Mocha
5. SASS/SCSS
6. Normalize.scss

## Future Iterations
 * When a user can cook a meal alert user that meal has been added to recipes to cook.
 * Add an missing images for recipes (specifically Double Raspberry Souffle).
 * Fix any tags displaying as "undefined".
 * Display all of the recipe's tags to the card.
 * Allow a user to set limits on whe they're low on specific ingredients and be notified to purchase more ingredients.
 * Consolidate search buttons and have the DOM update more fluildly.

## Project Members
This project was designed and implemented by [Cameron Aragon](https://github.com/caragon4695) 

