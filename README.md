https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links

# Exploring the world of nodebots

![](images/led-scene-0.gif)

## The Tech Inspiration

I was listening to the [Code Newbie Podcast](https://www.codenewbie.org/podcast) episode about [node bots](https://www.codenewbie.org/podcast/how-do-you-build-a-robot-in-javascript) with [Rachel White](http://rachelisaweso.me/) and was inspired as she was saying how simple it was to start building robots if you knew javascript. Which was felt accessible to me at the time because it was the first programming language that I had first picked up when learning how to code.

## The Real Life Inspiration

One day, when leaving my daughters with a new babysitter, my oldest, who was 6 at the time was really nervous about it and didn’t want us to go. Before the babysitter came, I told her that we could create a secret password to pass through the babysitter without him knowing. I said that we could tell the babysitter that my partner and I were going to go grocery shopping and my daughter was going to think about the type of fruit she was wanting us pick up. But the secret password was, that if she was having a really hard time and needed us to come home she could tell the babysitter to text us saying she wanted “bananas” (a fruit my daughter doesn’t like) but if she was having a great time and didn’t need us to come home she could text us and say she wanted “kiwi” (one of my daughters favorite fruit).

Bad time = “bananas” Good time = “kiwi”

## How tech and life came together

This interaction inspired me to think, what if I could have left my daughter with some kind of a device so that she could text me with an emoji how she was doing as opposed to going through the babysitter? Maybe the two options could be :smiley: or :cry:?

So the idea of the **Sloane Phone** was born.

_By the way, Sloane wanted “kiwi’s”._

## Project Plan

### Experience so far:

- I purchased an [Arduino Uno](https://store.arduino.cc/usa/arduino-uno-rev3) ($22) board online, and after realizing I had no way to plug it into my computer also bought a [Freenove Starter Kit](https://www.amazon.com.au/Freenove-Processing-Oscilloscope-Voltmeter-Components/dp/B0721B8228/ref=sr_1_1?keywords=freenove+arduino+uno+starter+kit&qid=1576150765&s=electronics&sr=1-1) ($34) as well.
- Familiarized myself with [Arduino Uno projects](https://electronicsforu.com/arduino-projects-ideas) to see what’s [possible](https://howtomechatronics.com/arduino-projects/) in [general](https://circuitdigest.com/arduino-projects).
- I googled some youtube video’s on how to connect a board and make it into a phone
- I attended a saturday’s hackers session at [Connected Community Hackerspace](https://www.hackmelbourne.org/) where I learned the basics of [Ohm’s Law](https://en.wikipedia.org/wiki/Ohm%27s_law) (electricity) and saw people building and driving around machine learning car robots.
- There I did the “hello world” of node bots and made an led light turn on just through the circuit board
- I’ve looked through the Arduino library for some examples of different projects to build but realized they’re in C and I’m wanting to use node.js

### Next steps:

- I understand that [Johnny-Five](http://johnny-five.io/) is a great site for documentation and the community is really friendly so I’ll try and start there as a guide
  - Join the [Gitter chat group](https://gitter.im/rwaldron/johnny-five) for more support
- I was also referred to [Node-Ardx](http://node-ardx.org/) as a place for node.bot newbies to start from people at Hackerspace Melbourne.
- Figure out all the hardware I need and what I need to purchase, I believe I need a [GSM](https://www.arduino.cc/en/Guide/ArduinoGSMShield) (\$40 (and this hobby is starting to get expensive))

### Schedule:

- Day 1
  - Set up node.js using the Johnny5 tutorials, configure any necessary settings
    - Use the [getting started wiki](https://github.com/rwaldron/johnny-five/wiki/Getting-Started)
  - Do the first couple of exercises from [Node-Ardx](http://node-ardx.org/) site
- Day 2
  - Do a couple more tutorials and more research on the phone to figure out what direction I would go next - if a phone would be too hard or if I needed to do something on a smaller scale like working with a button controlled servo that could turn and say “did you indent?” or “let’s build a toilet” or a personal heater for Bryan when it gets too cold for him
- Day 3
  - Build
- Day 4
  - If I haven’t done so already, write my own code (instead of finding other library code) on the project to use javascript with functions, looping, and conditional statements. Research things like “[navigator.vibrate(200)](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vibrate)” to see if phone commands could possibly work and why or why not?
- Day 5
  - Prepare to present. Possibly on this day work on the “ux” of the hardware design to make it a bit more sleek - or decide if I want to create a client side interface

### Bonus Features:

- GPS tracking possibly using a [Hologram SIM card](https://hologram.io/store/)
- Attach an [LCD display](https://www.arduino.cc/en/Tutorial/HelloWorld) so I can send messages back

## How to start a NodeBot project

Go to the [Johnn-Five website](http://johnny-five.io/). And follow their "Hello World!" steps. Step 2, setup your board, was tricky for me. I first went to this site that they refer you to([Firmata Arduino Github](https://github.com/firmata/arduino)) but found this page on Instructables to download [Standard Firmata](https://www.instructables.com/id/Arduino-Installing-Standard-Firmata/
http://firmata.org/wiki/Main_Page) the screenshots easier to follow.

I also ran into issues with my OS not allowing me to install the test from an unidentified developer, so this site was helpful on unlocking me security settings. [How to install programs from unidentified developers](https://kb.wisc.edu/25443)

Install [node-gyp](https://github.com/nodejs/node-gyp) which "is a cross-platform command-line tool written in Node.js for compiling native addon modules for Node.js."
`npm install -g node-gyp`

Make a directory
Create a node project
`node init`

Install the Johnny-Five dependency
`npm install johnny-five`

Create a new file
`touch blink.js`

Copy and paste the following into your blink.js file:

```
const {Board, Led} = require("johnny-five");
const board = new Board();

board.on("ready", () => {
  const led = new Led(13);
  led.blink(500);
});
```

Insert the shorter end of your led light into "GND" (which is short for ground) and the longer end into "13".

Plug the arduino into the computer using the USB.

Then in the terminal:
`node blink.js`

### Resources

- [npm keypress](https://www.npmjs.com/package/keypress) is helpful to use your keyboard as a controller. For example in the [Servo Continuous tutorial](http://johnny-five.io/examples/servo-continuous/) you require keypress and use the the up and down arrows, space bar, and q to control the servo.

### Hiccups

- GSM was going to cost $70 and then $70 to ship to get here with just 3 days to code on it which I didn't feel comfortable with. So I decided to get a Wifi Shield instead and try and code on it that way
