var getTweets = function() {

    // file system
    var fs = require('fs');

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

            // variables to hold tweet data for future use
            let repliedToScreenName = tweets[i].in_reply_to_screen_name;
            let tweetText = tweets[i].text;
            let retweetCount = tweets[i].retweet_count;
            let favoriteCount = tweets[i].favorite_count;
            let tweetDate = tweets[i].created_at;
            let tweetsArray = [];

            // variables to build tweet layout
            let repliedHeader = screenName + " Replied to " + repliedToScreenName + "'s tweet:\n";
            let tweetHeader = screenName + " Tweeted: \n";
            let tweetContent = tweetText + "\n";
            let tweetCount = "Retweets: " + retweetCount + " Favorites: " + favoriteCount;
            let tweetFooter = tweetDate + "\n------------------------------------------------------------------------------------\n";

            // if else to check if tweet was replied to someone or not
            if (repliedToScreenName) {
                console.log(repliedHeader);
                tweetsArray.push(repliedHeader);
            } else {
                console.log(tweetHeader);
                tweetsArray.push(tweetHeader);
            }
            console.log(tweetContent);
            tweetsArray.push(tweetContent);
            console.log(tweetCount);
            tweetsArray.push(tweetCount);
            console.log(tweetFooter);
            tweetsArray.push(tweetFooter);

            // testing tweetsArray logged content
            // console.log(tweetsArray);

            // writing tweetsArray to log.txt file
            fs.appendFile('./../log.txt', tweetsArray, (err) => {
                if (err) throw err;
            });
        }
        console.log(screenName + "'s tweets have been logged to the log.txt file!");
        // console.log(response); // Raw response object. 
    });
};

module.exports = getTweets;
