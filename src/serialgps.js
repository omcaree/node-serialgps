var serialport = require('serialport');
var nmea = require('nmea');
var EventEmitter = require("events").EventEmitter;



var serialgps = function(device, baud) {
	var port = new serialport.SerialPort(device, {
			baudrate: baud, parser: serialport.parsers.readline("\n") });
	var self = this;
	port.on('data', function(line) {
		if (line == undefined || !line.match(/^\$.+\*[0-9A-F]{2}$/)) {
			return;
		}
		var data = nmea.parse(line);
		if (data == undefined) {
			return;
		}
		self.emit('data',data);
		self.emit(data.type,data);
	});
}

serialgps.prototype = new EventEmitter();

module.exports = serialgps;
