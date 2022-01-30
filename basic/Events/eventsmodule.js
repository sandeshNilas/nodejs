//Create, fire, listen own events in node
var events = require('events');
var eventEmmitter = new events.EventEmitter();

//create an event handler:
var myEventHandler = function(){
    console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmmitter.on('fire', myEventHandler);

//Fire the 'scream' event:
eventEmmitter.emit('fire');
