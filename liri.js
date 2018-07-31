require("dotenv").config();
var Twitter = require('twitter');
var spotify = require("node-spotify-api");
var fse = require("fs-extra");
var request = require("request");

var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET

});

var userInput = process.argv[2];
var params = {
    screen_name: 'FelipeAPI',
    count: 20
}

client.get('statuses/home_timeline', params, function (error, tweet, response) {

    // var tweetsText =;
    if (error) {
        return console.log(error);

    }
    else if (userInput === "my-tweets") {
        console.log(" ");
        console.log("=== Here are your tweets ===: ")
        for (var i = 0; i < tweet.length; i++) {
            console.log(" ");
            console.log("User: " + tweet[i].user.name);
            console.log(" ");
            console.log(tweet[i].created_at);
            console.log(" ");
            console.log(tweet[i].text);
            console.log(" ");
            console.log(i + 1);
            console.log("############################################");



        }
        //created at
    } 
});

var Spotify = require('node-spotify-api');

var search = process.argv.slice(3).join(" ");

var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});
var search = process.argv.slice(3).join(" ");

if (userInput === "movie-this") {
    request("http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy", function (error, response, body) {

        // If the request was successful...
        // Then log the body from the site!
        console.log("##################################################");
        console.log("=== Here is your Movie: ===: ")
        console.log(" ");
        console.log("Title - " + JSON.parse(body).Title);
        console.log("--------------------------------------------------");
        console.log("Genre - " + JSON.parse(body).Genre);
                console.log(" ");
        console.log("Rated - " + JSON.parse(body).Rated);
        console.log(" ");
        console.log("Plot - " + JSON.parse(body).Plot);
        console.log(" ");
        console.log("Actors - " + JSON.parse(body).Actors);
        console.log(" ");
        console.log(JSON.parse(body).Country);
        console.log(" ");    
        console.log(JSON.parse(body).Language);
        console.log(" ");   
        console.log("Imdb: "+JSON.parse(body).imdbRating);
        console.log(" ");   
        console.log("Rotten Tomatoes: "+JSON.parse(body).Ratings[1].Value);
        console.log("##################################################");

        // console.log(JSON.parse(body));
        // console.log(JSON.parse(body));

    })
}
else if (userInput === "spotify-this-song") {

spotify.search({ type: 'track', query: search }, function (err, data) {

    if (err) {
        return console.log(err);
    }
    console.log("#################################################");
    console.log(" ");
    console.log("Artist: " + data.tracks.items[0].artists[0].name);
    console.log(" ");
    console.log("Album: " + data.tracks.items[0].album.name);
    console.log(" ");
    console.log("Song: " + data.tracks.items[0].name);
    console.log(" ");
    console.log("Preview: " + data.tracks.items[0].artists[0].external_urls.spotify);
    console.log(" ");
    console.log("#################################################");
      console.log(" ");

})}
          else if (userInput = "do-what-it-says") {
            var readMe = fse.readFileSync('random.txt', 'utf8');
            
spotify.search({ type: 'track', query: readMe }, function (err, data) {

    if (err) {
        return console.log(err);
    }
    console.log("#################################################");
    console.log(" ");
    console.log("Artist: " + data.tracks.items[0].artists[0].name);
    console.log(" ");
    console.log("Album: " + data.tracks.items[0].album.name);
    console.log(" ");
    console.log("Song: " + data.tracks.items[0].name);
    console.log(" ");
    console.log("Preview: " + data.tracks.items[0].artists[0].external_urls.spotify);
    console.log(" ");
    console.log("#################################################");
      console.log(" ");

})}
          

// liri must take these commands 
   // * `my-tweets`

 //   * `spotify-this-song`

 //   * `movie-this'

 //   * `do-what-it-says`


 //9. Add the code required to import the `keys.js` file and store it in a variable.
