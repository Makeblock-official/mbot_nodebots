// This is an example to show how to use the LEDs on the mbot.
// mbot maps WS2812 pixels in a 2 pixel strip attached to pin 13.

var five = require("johnny-five");
var firmata = require("firmata");
var pixel = require("node-pixel");
var HID = require("node-hid");

// set up the input
var stdin = process.openStdin();
require('tty').setRawMode(true);

var allDevices = HID.devices(0x416,0xffff);
console.log(allDevices);
var hiddev = new HID.HID(allDevices[0].path)

var io = new firmata.Board(hiddev);

var max_speed_l = 150;
var max_speed_r = 140;

var l_motor = r_motor = null;

var opts = {};
opts.io = io;
io.once('ready', function(){

    console.log('io ready');
    io.isReady = true;
    
    var board = new five.Board({io: io});
    var strip = null;

    var fps = 3; // how many frames per second do you want to try?

    board.on("ready", function() {

        l_motor = new five.Motor({pins: {pwm: 6, dir: 7}});
        r_motor = new five.Motor({pins: {pwm: 5, dir: 4}});

        console.info("Board connected. Robot set up. LRUD to control");

    });
});

stdin.on('keypress', function(chunk, key) {
	// process the keypresses

	if (key) {
		switch (key.name) {
			case "up":
                l_motor.reverse(max_speed_l);
                r_motor.forward(max_speed_r);
				break;
			case "down":
                r_motor.reverse(max_speed_r);
                l_motor.forward(max_speed_l);
				break;
			case "left":
                l_motor.forward(max_speed_l);
                r_motor.forward(max_speed_r);
				break;
			case "right":
                r_motor.reverse(max_speed_r);
                l_motor.reverse(max_speed_l);
				break;
			case "space":
                l_motor.stop();
                r_motor.stop();
				break;
		}
	}
});

