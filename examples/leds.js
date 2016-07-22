// This is an example to show how to use the LEDs on the mbot.
// mbot maps WS2812 pixels in a 2 pixel strip attached to pin 13.

var five = require("johnny-five");
var pixel = require("node-pixel");

var opts = {};
opts.port = process.argv[2] || "";

var board = new five.Board(opts);
var strip = null;

var fps = 3; // how many frames per second do you want to try?

board.on("ready", function() {

    console.log("Board ready, lets add light");

    strip = new pixel.Strip({
        data: 13,
        length: 2,
        board: this,
        controller: "FIRMATA",
    });

    strip.on("ready", function() {

        console.log("Strip ready, let's go");
        console.log("Press Ctrl + c twice to quit.");

        var colors = ["#440000", "#000044"];
        var current_colors = [0,1];
        var current_pos = [0,1];
        var blinker = setInterval(function() {

            strip.color("#000"); // blanks it out
            for (var i=0; i< current_pos.length; i++) {
                if (++current_pos[i] >= strip.stripLength()) {
                    current_pos[i] = 0;
                    if (++current_colors[i] >= colors.length) current_colors[i] = 0;
                }
                strip.pixel(current_pos[i]).color(colors[current_colors[i]]);
            }
            strip.show();
        }, 1000/fps);
    });
});
