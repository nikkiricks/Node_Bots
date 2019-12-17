//for servo
const {Board, Servo} = require("johnny-five");
const keypress = require("keypress");
keypress(process.stdin);
const board = new Board();
//for matrix (may not need both?)
var five = require("johnny-five");
// is this a problem that there are two boards?
// var board = new five.Board();

board.on("ready", function() {
  // insert code for servo
  console.log("Use Up and Down arrows for CW and CCW respectively. Space to stop.");

  const servo = new Servo.Continuous(10);

  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.setRawMode(true);

  process.stdin.on("keypress", (ch, key) => {

    if (!key) {
      return;
    }

    if (key.name === "q") {
      console.log("Quitting");
      process.exit();
    } else if (key.name === "up") {
      console.log("CW");
      servo.cw();

      var matrix = new five.Led.Matrix({
        pins: {
          data: 2,
          clock: 3,
          cs: 4
        }
      });
    
      matrix.on();
    
      var msg = " NOW".split("");
    
      // Display each letter for 2 seconds
      function next() {
        var c;
    
        if (c = msg.shift()) {
          matrix.draw(c);
          setTimeout(next, 2000);
        }
      }
    
      next();
    } else if (key.name === "down") {
      console.log("CCW");
      servo.ccw();
    } else if (key.name === "space") {
      console.log("Stopping");
      servo.stop();
    }
  });
})