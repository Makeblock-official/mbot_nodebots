// Assumes the reflectance sensor is put into PORT 3

// Gives you values of the reflectance sensor.
var five = require("johnny-five"),
    board = new five.Board();

board.on("ready", function() {

  // Create a new `reflectance` hardware instance.
  var eyes = new five.IR.Reflect.Array({
    emitter: 13,
    pins: ["A3", "A2"], // any number of pins
    freq: 100,
    autoCalibrate: true,
  });

  eyes.on('data', function() {
    console.log( "Raw Values: ", this.raw );
  });

  eyes.on('line', function() {
    console.log( "Line Position: ", this.line);
  });

  eyes.enable();
});
