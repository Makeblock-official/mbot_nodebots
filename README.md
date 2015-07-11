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

### 深JS Nodebots session流程

##### 时间：暂定活动第一天晚上 19:30-22:00

##### 时长:  3个半小时

* 根据国外举办经验，时间越长越好，但是由于白天还有其他非硬件的话题，所以不太可能占用太多时间。
* 晚上举办可以让参与者来决定是否参加硬件session, 没有兴趣的开发者仍可参加正常的After party。
* 一定程度上控制参与人数，减少硬件开支，让真正感兴趣的开发者参与，提升session质量

##### 前期安排：
* 参与者在报名时可选择是否对硬件session感兴趣，方便组织方统计人数，购买硬件设备。
* 主办方会根据实际参与人数提前对参与者进行分组，一定程度上节省时间
* 在白天会议期间插入一段与硬件有关的分享，帮助开发者更好的了解活动的流程和细节
* 预先准备好Github仓库，配合说明文案，让参与者可以提前准备(会场wifi条件可能不太稳定，防止安装npm等代码模块时出现问题)
* 前期在微博或其他渠道准备一些相关代码或文章，便于参与者更快上手

##### 硬件准备：
* 数量根据实际参与人数而定，暂定5人一组，人数可根据需要适当调整。预计总参与人数在200人。
* 根据Andrew之前组织经验，活动所需硬件价格范围在30到100美元
* 参考链接： http://www.openhardwareconf.org/wiki/SimpleBot-Assembly
* Andrew之前组织的活动都是从深圳采购的硬件，然后快递发往澳洲，斯里兰卡，甚至美国。直接联系深圳本地的硬件厂商可以从一定程度上降低成本
* 尽最大可能与本地厂商合作，联系到硬件赞助商

![img_1895](https://cloud.githubusercontent.com/assets/1183541/7173580/93352160-e42c-11e4-9644-9b48c82fb4b5.jpg)


##### 场地安排：
* 活动主会场可以容纳800多人，桌椅可根据需要随时移动
* 场地需要提供wifi，方便活动现场访问互联网，下载代码范例

##### 相关参考文档：

* 硬件厂商合作建议 https://github.com/jsconfcn/ShenJS/blob/master/docs/chaihuo.md
* 深JS简介 https://github.com/jsconfcn/ShenJS/blob/master/docs/shenjs-intro.md
* 深JS赞助商文档 https://github.com/jsconfcn/ShenJS/blob/master/docs/ShenJS-sponsorship-documentation.pdf

### License
MIT
