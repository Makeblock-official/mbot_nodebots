# Using your mBot as a NodeBot

[![Join the chat at https://gitter.im/Makeblock-official/mbot_nodebots](https://img.shields.io/badge/Gitter-Join%20Chat-brightgreen.svg)](https://gitter.im/Makeblock-official/mbot_nodebots?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
![](https://img.shields.io/badge/status-Stable-green.svg)

## Hardware [mbot](http://mblock.cc/) from [makeblock](http://www.makeblock.cc/)

> mBot is the easiest educational robot for kids to learn programming, Arduino and robotics.

![mbot](https://cloud.githubusercontent.com/assets/1183541/7513052/80e6dfc0-f4f4-11e4-94b8-76d3ee166cd2.jpg)

*Photo from [Andrew Fisher](https://twitter.com/ajfisher)*

## Getting started

### Everyone

1. Install the USB Serial driver for your platform. It's in the `drivers` folder.
If you're using linux you don't need to do anything. Win and Mac you will need to.
You'll also need to reboot your computer for it to take effect.
2. [Build the bot](http://www.instructables.com/id/How-to-make-a-mBot-with-Makeblock/)
3. Install the dependencies of:
    * [NodeJS](http://nodejs.org) - version 0.12.7
    * [Set up Git](https://help.github.com/articles/set-up-git/)

### Install using Arduino IDE

1. Install [Arduino IDE](http://arduino.cc)

```
git clone git@github.com:Makeblock-official/mbot_nodebots.git && cd mbot_nodebots
npm install
```

2. Install fimata. Open arduino and navigate to `firmware/mbotFirmata/mbotFirmata.ino` and open it.

Compile and then upload to the board.

### Install using Interchange

Connect with USB cable and install firmware using interchange (instruction
below assumes `./node_modules/.bin` is on your path. You can also install interchange
with the `npm install -g nodebots-interchange` switch to install it globally.

```
npm install nodebots-interchange
```

You can install the firmware to work with either USB or Bluetooth with appropriate
firmata using the firmata switch on interchange

To use USB:

```
interchange install git+https://github.com/Makeblock-official/mbot_nodebots -a uno --firmata=usb
```

To use Bluetooth:

```
interchange install git+https://github.com/Makeblock-official/mbot_nodebots -a uno --firmata=bluetooth
```

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

## Bluetooth module

To use the BT module do the following modifications:

* Remove the bluetooth module from the mBot
* Install the bluetooth firmata with instruction below

```
interchange install git+https://github.com/Makeblock-official/mbot_nodebots -a uno --firmata=bluetooth
```

* Turn the mbot off, install the bluetooth module, turn the board on again.
* Pair the module (use whatever tool you need to make that work - usually BT settings
in your control panel).

Test the connection by using a screen terminal such as:

```
screen /dev/tty.Makeblock-ELETSPP
```

If this connects you should see the blue LED on the BT module go solid. From there
hit the reset button on the board and then you should see something like the following
appear on your terminal.

```
��ymbotFirmata.ino��{�3��l�A�2�U�
```

If you don't get that, test your connection etc. If you do then proceed.

Now execute

```
node examples/leds.js /dev/tty.Makeblock-ELETSPP
```

And you should get blinking lights over BT. You can do the same thing with
most of the examples though speed may be an issue in high data rate cases.

## 2.4GHz wireless module

Install using:

```
npm install drivers/node-hid
```

Run example

```
node examples/wifi_motors.js
```

