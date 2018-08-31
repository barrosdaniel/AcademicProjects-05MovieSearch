// module imports
var express = require('express');
var app = express();
var request = require('request');
app.set('view engine', 'ejs');

// Routes
app.get('/search', function (req, res) {

});

app.get('/results', function (req, res) {
    request('http://www.omdbapi.com/?apikey=thewdb&plot=full&t=Dirty+Dancing', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var results = JSON.parse(body);
            res.render('results', {
                titleVar: results.Title,
                yearVar: results.Year,
                genreVar: results.Genre,
                durationVar: results.Runtime,
                castVar: results.Actors,
                posterVar: results.Poster,
                plotVar: results.Plot,
            });
        }
    });
});


// Initialise server
app.listen(3000, function () {
    console.log('Server active on port 3000');    
});