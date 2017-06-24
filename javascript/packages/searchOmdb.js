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

        // Print the error if one occurred
        if (!error && response.statusCode == 200) {

            // Display queried info
            console.log("\nHere is the information that you requested from your search from OMDB.\n");

            console.log('Title:', omdbData.Title);
            console.log('Year Released:', omdbData.Year);
            console.log('IMDB Rating:', omdbData.imdbRating);
            console.log('Country That Produced Movie:', omdbData.Country);
            console.log('Language:', omdbData.Language);
            console.log('Plot:', omdbData.Plot);
            console.log('Actors:', omdbData.Actors + "\n");
            // console.log('Rotten Tomatoes URL:', omdbData.); // OMDB doesnt provide that url 
        } else {
            console.log('error:', error);
        }
    });
};

module.exports = searchOmdb;