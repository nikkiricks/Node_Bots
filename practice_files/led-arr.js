const {Board, Leds} = require("johnny-five");
const board = new Board();

board.on("ready", () => {
  const leds = new Leds([3, 5, 6]);
  // console.log(leds[0])

  // leds.pulse();

    // Instead of passing a time and rate, you can
  // pass any valid Animation() segment opts object
  // https://github.com/rwaldron/johnny-five/wiki/Animation#segment-properties
  leds.pulse({
    easing: "linear",
    duration: 3000,
    cuePoints: [0, 0.2, 0.4, 0.6, 0.8, 1],
    keyFrames: [0, 10, 0, 50, 0, 255],
    onstop() {
      console.log("Animation stopped");
    }
  });

  // Stop and turn off the s pulse loop after
  // 12 seconds (shown in ms)
  board.wait(12000, () => {

    // stop() terminates the interval
    // off() shuts the s off
    leds.stop().off();
  });
});