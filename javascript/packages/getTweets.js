var getTweets = function() {

    // twitter keys
    var keys = require('./../keys/keys.js');
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
                console.log(screenName + " Replied to " + tweets[i].in_reply_to_screen_name + "'s tweet:\n");
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

module.exports = getTweets;