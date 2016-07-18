// Adapted from Johnny Five Example for JS Conf CN nodebots session.
// Button class doesn't appear to work so this will do it for what you need
// Potentially just emit an event if you need it.

var five = require("johnny-five");

var board = new five.Board();

board.on("ready", function() {

    // Create a new `button` hardware instance.
    // This example allows the button module to
    // create a completely default instance
    console.log("Board ready");

    var button = new five.Button({
        pin: "A7",
        controller: "TINKERKIT",
        invert: true
    });

    button.on("press", function() {
        console.log("pressed");
    });

    button.on("release", function() {
        console.log("released");
    });

    button.on("hold", function() {
        console.log("held");
    });

});
