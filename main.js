//include the module
var serialgps = require('./src/serialgps.js');

//create a new instance. arguments are serial port and baud rate
var gps = new serialgps('/dev/ttyO1',9600);

//monitor for data
gps.on('data', function(data) {
    console.log(data);
});