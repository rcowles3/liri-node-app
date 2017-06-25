// function to search spotify for song info
var searchSpotify = function(songName) {

    // Return:
    /*
		Artist(s)
		The song's name
		A preview link of the song from Spotify
		The album that the song is from
	*/

    var fs = require('fs'); // file system

    // spotify keys
    var keys = require('./../keys/keys.js');
    let spotify = keys.spotify;

    // if no track is searched, default
    if (songName === undefined) {
        songName = 'Time Bomb';
    }

    spotify.search({ type: 'track', limit: 1, query: songName }, function(err, data) {
        if (err) {
            return console.log("\nAn error has occurred: \n" + err + "\n");
        }

        // variables for track info, q is short for the query of whats searched
        let qArtist = data.tracks.items[0].artists[0].name;
        let qTrack = data.tracks.items[0].name;
        let qAlbum = data.tracks.items[0].album.name;
        let qSongLink = data.tracks.items[0].artists[0].external_urls.spotify;
        let spotifyArray = []; // array to hold queried data to later be appended to log.txt

        // vars to build spotify info layout
        let displayHeader = "\nHere is the information that you requested from your Spotify search.";
        let displayArtists = "\nArtist: " + qArtist;
        let displaySong = "Name Of Song: " + qTrack;
        let displayAlbum = "Album: " + qAlbum;
        let displayUrl = "Preview Url: " + qSongLink + "\n";

        // console.log(data); // raw data object

        // display data to command line
        console.log(displayHeader);
        console.log(displayArtists);
        console.log(displaySong);
        console.log(displayAlbum);
        console.log(displayUrl);

        // push data to spotifyArray for logging purposes
        spotifyArray.push(displayHeader);
        spotifyArray.push(displayArtists);
        spotifyArray.push(displaySong);
        spotifyArray.push(displayAlbum);
        spotifyArray.push(displayUrl);

        // writing spotifyArray to log.txt file
        fs.appendFile('./../../log.txt', spotifyArray, (err) => {
            if (err) throw err;
            console.log("This song data from Spotify has been logged to the log.txt file!");
        });
    });
};

module.exports = searchSpotify;