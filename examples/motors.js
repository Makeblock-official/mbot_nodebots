var five = require("johnny-five");

var max_speed_l = 150;
var max_speed_r = 140;

// set up the input
var stdin = process.stdin;
stdin.setRawMode(true);

var board = new five.Board({port: process.argv[2]});

var l_motor = r_motor = null;

board.on("ready", function(err) {

    if (err){
        console.log(err);
        return;
    }
    l_motor = new five.Motor({pins: {pwm: 6, dir: 7}});
    r_motor = new five.Motor({pins: {pwm: 5, dir: 4}});

    console.info("Board connected. Robot set up. LRUD to control");

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

