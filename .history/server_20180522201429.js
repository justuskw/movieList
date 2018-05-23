const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

var movies = [
    {title: 'Mean Girls', watched: false, year: 2000},
    {title: 'Hackers', watched: false, year: 2000},
    {title: 'The Grey', watched: false, year: 2000},
    {title: 'Sunshine', watched: false, year: 2000},
    {title: 'Ex Machina', watched: false, year: 2000}
  ];

app.use(express.static('/Users/justuskovats-wildenradt/movieList'));

app.get('/', function(req, res) {
    res.sendFile('/Users/justuskovats-wildenradt/movieList/index.html')
});

app.get('/movies', function(req, res) {
    res.send(movies);
})

app.listen(port, function() {
    console.log('app is listenting on ' + port);
})