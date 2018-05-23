const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

app.static(express.static('/Users/justuskovats-wildenradt/movieList'));

app.get()

app.listen(port, function() {
    console.log('app is listenting on ' + port);
})