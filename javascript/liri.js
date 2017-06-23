'use-strict';

// Liri aplication to take the following arguments
// and return data respectivly

// my-tweets
// spotify-this-song
// movie-this

// REQUIRED VARIABLES
// ====================================================

var fs = require('fs'); // file system
var keys = require('./keys.js');
var twitter = require('twitter');
var spotify = require('node-spotify-api');
var request = require('request');

// FUNCTIONS
// ====================================================

// function to get latest tweets from account, 20
var getTweets = function() {

    // twitter keys
    let twitterKeys = keys.client;

    // var to hold twitter user name parameters
    let params = { screen_name: 'ignortainment', count: 20 };

    twitterKeys.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (error) throw error;

        // variable to access username index on tweets
        let screenName = tweets[params.count - 1].user.name;
        let twitterHandle = tweets[params.count - 1].user.screen_name;

        // console.log(screenName, twitterHandle); // test to get twitter user info

        // show who's account's tweets we are displaying
        console.log("\nName: " + screenName);
        console.log("@" + twitterHandle + "\n");

        // for loop to run through all tweets and grab specific data
        for (var i = 0; i < tweets.length; i++) {

            // if else to check if tweet was replied to someone or not
            if (tweets[i].in_reply_to_screen_name) {
                console.log(screenName + " Replied to " + tweets[i].in_reply_to_screen_name + " tweet:\n");
            } else {
                console.log(screenName + " Tweeted: \n");
            }
            console.log(tweets[i].text + "\n");
            console.log("Retweets: " + tweets[i].retweet_count + " Favorites: " + tweets[i].favorite_count);
            console.log(tweets[i].created_at + "\n------------------------------------------------------------------------------------\n");
        }

        // console.log(response); // Raw response object. 
    });
};

// function to search spotify for song info
var searchSpotify = function() {

    // Return:
    /*
		Artist(s)
		The song's name
		A preview link of the song from Spotify
		The album that the song is from
	*/

    // spotify keys
    let spotify = keys.spotify;   

    spotify.search({ type: 'track', limit: 1, query: 'time bomb' }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

    // variables for track info, q is short for the query of whats searched
    let qArtist = data.tracks.items[0].artists[0].name;
    let qTrack = data.tracks.items[0].name;
    let qAlbum = data.tracks.items[0].album.name;
    let qSongLink = data.tracks.items[0].artists[0].external_urls.spotify;

        // console.log(data); // raw data object

        // display data to command line
        console.log("\nHere is the information that you requested from your Spotify search.");
        console.log("\nArtist: " + qArtist);
        console.log("Name Of Song: " + qTrack);
        console.log("Album: " + qAlbum);
        console.log("Preview Url: " + qSongLink + "\n");
       
    });
}

// calling our functions
// getTweets();
searchSpotify();
