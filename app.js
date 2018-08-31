// module imports
var express = require('express');
var app = express();
var request = require('request');
app.set('view engine', 'ejs');

// Routes
app.get('/search', function (req, res) {

});

app.get('/results', function (req, res) {
    request('http://www.omdbapi.com/?apikey=thewdb&plot=full&t=Cast+Away', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render('results', {
                titleVar: data.Title,
                yearVar: data.Year,
                genreVar: data.Genre,
                durationVar: data.Runtime,
                castVar: data.Actors,
                posterVar: data.Poster,
                plotVar: data.Plot,
            });
        }
    });
});


// Initialise server
app.listen(3000, function () {
    console.log('Server active on port 3000');    
});