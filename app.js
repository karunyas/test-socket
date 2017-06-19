//index.js
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);



app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// allows the browser to go look at external css sytlesheet and the external js script
// dot indicates current library
app.use(express.static('.'))

//using socket to display the time

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

socket.on('time', function(date){
	console.log('time:', date);
	socket.emit('message', 'keep going!');
});

});

// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     io.emit('quick, time is running out!', Date());
//   });
// });

http.listen(3000, function(){
  console.log('listening on *:3000');
});



// ko.bindingHandlers.jqButton = {
// 		    init: function(element) {
// 		       $(element).button(); // Turns the element into a jQuery UI button
// 		    }
// 		}; 
//app.js change!!
