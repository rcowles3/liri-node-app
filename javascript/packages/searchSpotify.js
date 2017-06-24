// function to search spotify for song info
var searchSpotify = function(songName) {

    // Return:
    /*
		Artist(s)
		The song's name
		A preview link of the song from Spotify
		The album that the song is from
	*/

    // spotify keys
    var keys = require('./../keys/keys.js');
    let spotify = keys.spotify;

    // if no track is searched, default
    if (songName === undefined) {
        songName = 'Time Bomb';
    }

    spotify.search({ type: 'track', limit: 1, query: songName }, function(err, data) {
        if (err) {
            return console.log('\nPlease enter a valid song name, with "-" as a space: \n' + err + "\n");
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
};

module.exports = searchSpotify;