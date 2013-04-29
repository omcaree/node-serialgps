Serial NMEA GPS Module
======================

This module makes use of the serialport and nmea modules to simplify data collection from a GPS device.

Installation
============

Install with

```
npm install serialgps
```

Usage
=====

Simple usage can be found in main.js

```
//include the module
var serialgps = require('serialgps');

//create a new instance. arguments are serial port and baud rate
var gps = new serialgps('/dev/ttyO1',9600);

//monitor for data
gps.on('data', function(data) {
    console.log(data);
});
```

You may also listen for a specific NMEA message type, any of

* fix - GGA message
* geo-position - GGL message
* nav-info - RMC message
* track-info - VTG message
* active-satellites - GSA message
* satellite-list-partial - GSV message

For example,

```
gps.on('fix', function(data) {
    console.log(data);
});
```
returns the following...
```
{ type: 'fix',
  timestamp: '140554.000',
  lat: '5245.5061',
  latPole: 'N',
  lon: '00114.8934',
  lonPole: 'W',
  fixType: 'fix',
  numSat: 5,
  horDilution: 1.81,
  alt: 84.8,
  altUnit: 'M',
  geoidalSep: 47.5,
  geoidalSepUnit: 'M',
  differentialAge: 0,
  differentialRefStn: '',
  talker_id: 'GP' }
```
