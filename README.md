## ShenJS nodebots session instruction

### Hardware [mbot](http://mblock.cc/) from [makeblock](http://www.makeblock.cc/)

> mBot is the easiest educational robot for kids to learn programming, Arduino and robotics.

![mbot](https://cloud.githubusercontent.com/assets/1183541/7513052/80e6dfc0-f4f4-11e4-94b8-76d3ee166cd2.jpg)

*Photo from [Andrew Fisher](https://twitter.com/ajfisher)*

### Getting started

Note that

1. Install [Arduino IDE](http://arduino.cc)
2. Install [Makeblock-USB-Driver](https://github.com/Makeblock-official/Makeblock-USB-Driver) Note for Mac users, use the driver included in this repo in the `drivers` folder as this one is signed.  **This step will reboot your computer**
4. [Build the bot](http://www.instructables.com/id/How-to-make-a-mBot-with-Makeblock/)
5. Install depedencies (I presume you already have nodejs + npm installed.)

```
git clone git@github.com:jsconfcn/nodebots-session.git && cd nodebots-session
npm install
```

6. Install fimata. Open arduino and navigage to `firmware/mbotFirmata/mbotFirmata.ino` and open it.

Compile and then upload to the board.

## Examples

Examples are in the examples directory. You can run using `node examples/file.js` like
normal. Information about the examples is below

### Motors

Use `examples/motors.js` this will drive the mbot around using the arrow keys on
your keyboard. You may need to change the details of the directions depending on
how you wired up the motors.

### Buzzer

Use `examples/piezo.js` - this will make your mbot play some tunes.

### Obstacle detection

Use `examples/sonar.js` to detect the distance to an object. You can use this to
stop your robot from running into this.

### Button

Your mbot has a little button that you can use to trigger something maybe. Use
`examples/button.js` to detect the button press and do something with it.

### Light Sensor

You can read the light level near the mbot - maybe you can make your mbot
run away from too much light or move towards more light? Use `examples/light.js`

### LEDs

There are 2 LEDs on the mbot which are RGB LEDs. These are connected in a strip
so you can use node-pixel to control them. An example is `examples\leds.js`

### Reflectance sensor

Under your mbot is a sensor which you can use to detect lines. Look at
`examples\reflectance.js` to see how to get the data. You can detect lines by
getting one of the two sensors to be bright and one to be dark so it can follow
an edge.

## 2.4GHz wireless module

Install using:

```
npm install drivers/node-hid
```

Run example

```
node examples/wifi_motors.js
```

### [Schedule](https://github.com/jsconfcn/nodebots-session/blob/master/schedule.md)

### License
MIT
