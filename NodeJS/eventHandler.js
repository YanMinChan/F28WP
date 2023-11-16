// a similar system in nodejs, handler works like event in javascript
// i.e. mouse click in javascript

// nodejs callback works in asynchronous pattern
// event handling works in observer pattern, 
// where a events gets fired, the event handler starts listening

var events = require("events");

// event emmitter object (useful for handling events)
var eventEmitter = new events.EventEmitter();

// event handler (i.e. what happen when connection successful etc)
var connectHandler = function connected(){
	console.log("connection successful!");
	eventEmitter.emit('data_received'); // fires an event
}

var writingHandler = function writing(){
	console.log("I am writing something in the console");
	var abc = eventEmitter.listeners('writing'); //returns the array of listener (this writing() function)
	console.log(abc);
}

// binds 'connection' event with an suitable handler
// connectHandler is added to a list of listener array for the connection event
// can be removed using eventEmitter.removeListener
eventEmitter.on('connection', connectHandler);

// binds 'data_received' event with anonymous function
eventEmitter.on('data_received', function(){
	console.log("data received successfully!");
	eventEmitter.emit('writing');
})

// binds 'writing' event with an suitable handler
eventEmitter.on('writing', writingHandler);

// fire the connection event
eventEmitter.emit('connection');

console.log("Program ended")