// This file will contain all nessesary acces keys required for application to run

// console.log('keys are loaded');

// twitter access keys
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'oZgEcszPWhUJnMAYhUb0LAPcX',
  consumer_secret: 'ODeUMNouJ00gYVCbyxH3Xtcha4sUtWYn2vIJyajYygodFt2ocB',
  access_token_key: '506978475-fZDwxJfN0VI3DRiSJlE8Y2yLxzh3ovgVdBkPjslS',
  access_token_secret: 'LW5ZOwqQtkoa1LcvSx2ueeObIV1P81tfOPaiwfJIiqjh8'
});

// module.exports = client;



// spotify access keys
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: 'a2be8dbef5ec4b30aca4ae519cc32c14',
  secret: '36bca0118f484673bf6fbb53cf21cdbb'
});

// module.exports = spotify;

module.exports = {client, spotify};