var five = require("johnny-five"),
  board = new five.Board(),
  keypress = require('keypress');

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

board.on("ready", function() {

  var motor1 = new five.Motor({
    pins: {
      pwm: 6,
      dir: 7
    }
  });

  var motor2 = new five.Motor({
    pins: {
      pwm: 5,
      dir: 4
    }
  });

  var car = {
    forward: function() {
      motor1.reverse(100);
      motor2.forward(100);
    },
    reverse: function() {
      motor1.forward(100);
      motor2.reverse(100);
    },
    left: function() {
      motor1.forward(100);
      motor2.forward(0);
    },
    right: function() {
      motor1.forward(0);
      motor2.forward(100);
    },
    stop: function() {
      motor1.forward(0);
      motor2.forward(0);
    }
  }

  // board.repl.inject({
  //   car: car,
  //   motor1: motor1,
  //   motor2: motor2
  // });

  motor1.on("start", function() {
    console.log("start");
  });

  // listen for the "keypress" event
  process.stdin.on('keypress', function (ch, key) {
    console.log('got "keypress"', key);
    if (key && key.name == 'up') {
      car.forward();
    }
    if (key && key.name == 'down') {
      car.reverse();
    }
    if (key && key.name == 'left') {
      car.left();
    }
    if (key && key.name == 'right') {
      car.right();
    }
    if (key && key.name == 'space') {
      car.stop();
    }
  });

  process.stdin.setRawMode(true);
  process.stdin.resume();

});
