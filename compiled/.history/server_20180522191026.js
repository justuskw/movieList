'use strict';

var express = require('express');
var path = require('path');

var app = express();

var port = 3000;

app.static(express.static('/Users/justuskovats-wildenradt/movieList'));

app.get('/', function (req, res) {
    res.sendFile('/Users/justuskovats-wildenradt/movieList/server.js');
});

app.listen(port, function () {
    console.log('app is listenting on ' + port);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy5oaXN0b3J5L3NlcnZlcl8yMDE4MDUyMjE5MTAyNi5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsInBhdGgiLCJhcHAiLCJwb3J0Iiwic3RhdGljIiwiZ2V0IiwicmVxIiwicmVzIiwic2VuZEZpbGUiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFVBQVVDLFFBQVEsU0FBUixDQUFoQjtBQUNBLElBQU1DLE9BQU9ELFFBQVEsTUFBUixDQUFiOztBQUVBLElBQU1FLE1BQU1ILFNBQVo7O0FBRUEsSUFBTUksT0FBTyxJQUFiOztBQUVBRCxJQUFJRSxNQUFKLENBQVdMLFFBQVFLLE1BQVIsQ0FBZSwwQ0FBZixDQUFYOztBQUVBRixJQUFJRyxHQUFKLENBQVEsR0FBUixFQUFhLFVBQVNDLEdBQVQsRUFBY0MsR0FBZCxFQUFtQjtBQUM1QkEsUUFBSUMsUUFBSixDQUFhLG9EQUFiO0FBQ0gsQ0FGRDs7QUFJQU4sSUFBSU8sTUFBSixDQUFXTixJQUFYLEVBQWlCLFlBQVc7QUFDeEJPLFlBQVFDLEdBQVIsQ0FBWSwwQkFBMEJSLElBQXRDO0FBQ0gsQ0FGRCIsImZpbGUiOiJzZXJ2ZXJfMjAxODA1MjIxOTEwMjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5jb25zdCBwb3J0ID0gMzAwMDtcblxuYXBwLnN0YXRpYyhleHByZXNzLnN0YXRpYygnL1VzZXJzL2p1c3R1c2tvdmF0cy13aWxkZW5yYWR0L21vdmllTGlzdCcpKTtcblxuYXBwLmdldCgnLycsIGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG4gICAgcmVzLnNlbmRGaWxlKCcvVXNlcnMvanVzdHVza292YXRzLXdpbGRlbnJhZHQvbW92aWVMaXN0L3NlcnZlci5qcycpXG59KTtcblxuYXBwLmxpc3Rlbihwb3J0LCBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZygnYXBwIGlzIGxpc3RlbnRpbmcgb24gJyArIHBvcnQpO1xufSkiXX0=