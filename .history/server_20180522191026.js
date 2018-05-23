const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

app.static(express.static('/Users/justuskovats-wildenradt/movieList'));

app.get('/', function(req, res) {
    res.sendFile('/Users/justuskovats-wildenradt/movieList/server.js')
});

app.listen(port, function() {
    console.log('app is listenting on ' + port);
})