// console.log('keys are loaded');

// exports.twitterKeys = {
//   consumer_key: 'oZgEcszPWhUJnMAYhUb0LAPcX',
//   consumer_secret: 'ODeUMNouJ00gYVCbyxH3Xtcha4sUtWYn2vIJyajYygodFt2ocB',
//   access_token_key: '506978475-fZDwxJfN0VI3DRiSJlE8Y2yLxzh3ovgVdBkPjslS',
//   access_token_secret: 'LW5ZOwqQtkoa1LcvSx2ueeObIV1P81tfOPaiwfJIiqjh8',
// }

var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'oZgEcszPWhUJnMAYhUb0LAPcX',
  consumer_secret: 'ODeUMNouJ00gYVCbyxH3Xtcha4sUtWYn2vIJyajYygodFt2ocB',
  access_token_key: '506978475-fZDwxJfN0VI3DRiSJlE8Y2yLxzh3ovgVdBkPjslS',
  access_token_secret: 'LW5ZOwqQtkoa1LcvSx2ueeObIV1P81tfOPaiwfJIiqjh8'
});

module.exports = client;
