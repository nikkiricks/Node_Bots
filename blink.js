const {Board, Led} = require("johnny-five");
const board = new Board();

board.on("ready", () => {
  const led = new Led(13);
  led.blink(1000);
});

// var serialport = require("serialport");
// serialport.list(function(err, ports) {
//     console.log(ports);

// });