'use-strict';

// Liri aplication to take the following arguments
// and return data respectivly

/*
	my-tweets
	spotify-this-song
	movie-this
	do-what-it-says
*/

// REQUIRED VARIABLES
// ====================================================

// requiring npm's, and declaring CL input
var fs = require('fs'); // file system
var twitter = require('twitter');
var spotify = require('node-spotify-api');
var searchArg = process.argv[3];
var nodeArg = process.argv[2];

// reading exports from other js files from packages dr
var getTweets = require('./javascript/packages/getTweets.js');
var searchSpotify = require('./javascript/packages/searchSpotify.js');
var searchOmdb = require('./javascript/packages/searchOmdb.js');

// FUNCTIONS TO RUN APPLICATION
// ====================================================

// // function to read text from txt file
var readData = function() {

    fs.readFile("./random.txt", "utf8", function(error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
            return console.log(error);
        }

        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");

        // We will then re-display the content as an array for later use.
        // console.log(dataArr);

        // calls the choose command function based off whats in file, and passes the data from the array as parameters
        if (dataArr.length == 2) {
            chooseCmd(dataArr[0], dataArr[1]);
        } else if (dataArr.length == 1) {
            chooseCmd(dataArr[0]);
        }
    });
};

// // function that takes two parameters to run the app, the node command, and then what the user searches
var chooseCmd = function(nodeCmd, searchQuery) {

    // switch case to identify which command user entered, and then runs corresponding function
    switch (nodeCmd) {
        case 'my-tweets':
            getTweets();
            break;
        case 'spotify-this-song':
            searchSpotify(searchQuery); // passes what user wants to search, as a parameter in its function
            break;
        case 'movie-this':
            searchOmdb(searchQuery); // passes what user wants to search, as a parameter in its function
            break;
        case 'do-what-it-says':
            readData();
            break;
        default:
            console.log('\nPlease enter a valid command.\n');
            console.log(' ----- my-tweets\n ----- spotify-this-song\n ----- movie-this\n ----- do-what-it-says\n');
            break;
    }
};

// run application function
var runApp = function(argOne, argTwo) {
    chooseCmd(argOne, argTwo);
};

// call to run app
runApp(nodeArg, searchArg);
