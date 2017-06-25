// function to get searched movie from omdb
var searchOmdb = function(movieName) {

    // Return
    /*
        Title of the movie.
        Year the movie came out.
        IMDB Rating of the movie.
        Country where the movie was produced.
        Language of the movie.
        Plot of the movie.
        Actors in the movie.
        Rotten Tomatoes URL.
     */

    // var to use request npm
    var request = require('request');
    var fs = require('fs'); // file system

    // omdb access key
    var keys = require('./../keys/keys.js');
    let omdbKey = keys.omdb;

    // if no movie is searched, default
    if (movieName === undefined) {
        movieName = 'Shrek';
    }

    // url to search omdb
    var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=" + omdbKey;

    request(queryURL, function(error, response, body) {

        // parse raw data as json obj
        let omdbData = JSON.parse(body);

        // var to build movie info layout
        let movieHeader = "\nHere is the information that you requested from your search from OMDB.\n";
        let movieTitle = "Title: " + omdbData.Title;
        let yearReleased = "Year Released: " + omdbData.Year;
        let imdbRating = "IMDB Rating: " + omdbData.imdbRating;
        let countryProduced = "Country Movie Was Produced By: " + omdbData.Country;
        let movieLanguage = "Language: " + omdbData.Language;
        let moviePlot = "Plot: " + omdbData.Plot;
        let movieActors = "Actors: " + omdbData.Actors + "\n";
        let movieArray = []; // array to push movie data to, to later be appended to log.txt

        // Print the error if one occurred
        if (!error && response.statusCode == 200) {

            // Display queried info
            console.log(movieHeader);
            console.log(movieTitle);
            console.log(yearReleased);
            console.log(imdbRating);
            console.log(countryProduced);
            console.log(movieLanguage);
            console.log(moviePlot);
            console.log(movieActors);
            // console.log('Rotten Tomatoes URL:', omdbData.); // OMDB doesnt provide that url 

            // push movie info to movieArray
            movieArray.push(movieHeader);
            movieArray.push(movieTitle);
            movieArray.push(yearReleased);
            movieArray.push(imdbRating);
            movieArray.push(countryProduced);
            movieArray.push(movieLanguage);
            movieArray.push(moviePlot);
            movieArray.push(movieActors);
        } else {
            console.log('error:', error);
        }

        // writing movieArray to log.txt file
        fs.appendFile('./../../log.txt', movieArray, (err) => {
            if (err) throw err;
            console.log("This movie data has been logged to the log.txt file!");
        });
    });
};

module.exports = searchOmdb;
