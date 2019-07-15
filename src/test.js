// get the reference of EventEmitter class of events module
const events = require('events');
//create an object of EventEmitter class by using above reference
const em = new events.EventEmitter();
// register a listener for the 'knock' event
em.on('knock', function (data) {
    console.log('Received the knock event: ' + data);
});
// trigger an event called 'knock'
em.emit('knock', "data passed");
