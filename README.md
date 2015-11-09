# Using your mBot as a NodeBot

[![Join the chat at https://gitter.im/Makeblock-official/mbot_nodebots](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Makeblock-official/mbot_nodebots?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Hardware [mbot](http://mblock.cc/) from [makeblock](http://www.makeblock.cc/)

> mBot is the easiest educational robot for kids to learn programming, Arduino and robotics.

![mbot](https://cloud.githubusercontent.com/assets/1183541/7513052/80e6dfc0-f4f4-11e4-94b8-76d3ee166cd2.jpg)

*Photo from [Andrew Fisher](https://twitter.com/ajfisher)*

## Getting started

### Install using Arduino IDE

1. Install [Arduino IDE](http://arduino.cc)
2. Install [Makeblock-USB-Driver](https://github.com/Makeblock-official/Makeblock-USB-Driver) 
Note for Mac users, use the driver included in this repo in the `drivers` folder 
as this one is signed.  **This step will reboot your computer**
4. [Build the bot](http://www.instructables.com/id/How-to-make-a-mBot-with-Makeblock/)
5. Install depedencies (I presume you already have nodejs + npm installed.)

```
git clone git@github.com:Makeblock-official/mbot_nodebots.git && cd mbot_nodebots
npm install
```

6. Install fimata. Open arduino and navigate to `firmware/mbotFirmata/mbotFirmata.ino` and open it.

Compile and then upload to the board.

### Install using Interchange

1. Make sure nodejs and npm are installed.
2. Install [Makeblock-USB-Driver](https://github.com/Makeblock-official/Makeblock-USB-Driver) 
Note for Mac users, use the driver included in this repo in the `drivers` folder 
as this one is signed.  **This step will reboot your computer**
3. Build the bot.
4. Connect with USB cable and install firmware using interchange (instruction
below assumes `./node_modules/.bin` is on your path. You can also install interchange
with the `npm install -g ajfisher/nodebots-interchange` switch to install it globally.

```
npm install ajfisher/nodebots-interchange
interchange install git+https://github.com/Makeblock-official/mbot_nodebots -a uno --firmata
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
* Open up the `firmware/mbotFirmata/mbotFirmata.ino` firmware in arduino
* Search for the line that has `Firmata.begin(57600)` and replace with 
`Firmata.begin(115200)`
* Upload to the mBot board.
* Turn the mbot off, install the bluetooth module, turn the board on again.
* Pair the module (use whatever tool you need to make that work).

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

