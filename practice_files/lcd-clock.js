// var five = require("johnny-five");
// var board = new five.Board();

// board.on("ready", () => {


// //  var random = Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 4).toUpperCase();


//  // Controller: PCF8574A (Generic I2C)
//  // Locate the controller chip model number on the chip itself.
//  var l = new five.LCD({
//  controller: "PCF8574A"
//  });
 
//  l.clear();
//  l.useChar("heart"); // use symbol of heart
//  l.cursor(0, 0).print("hello world I2C");
//  l.cursor(1, 0).print("use PCF8574A :heart:");
//  l.cursor(1, 16).blink(); // hide the cursor

// // no need to Ctrl+C
//  setTimeout(function() {
//  process.exit(0);
//  }, 3000);
// });

/////////////////////



// var five = require("johnny-five");
// var board = new five.Board();

// board.on("ready", function() {

//   var lcd = new five.LCD({
//     // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
//     // Arduino pin # 7    8   9   10  11  12
//     pins: [7, 8, 9, 10, 11, 12],
//     rows: 4,
//     cols: 20
//   });

//   var k = 0;
//   var i = 0;
//   var keys = Object.keys(five.LCD.Characters.DEFAULT);
//   var length = keys.length;
//   var eights = [];

//   while (i < length) {
//     eights.push(keys.slice(i, i + 8));
//     i += 8;
//   }

//   console.log("Wait 5 seconds...");

//   this.loop(2000, function() {
//     var charset = eights[k],
//       display = "";

//     lcd.clear();

//     if (k < eights.length) {

//       charset.forEach(function(char, index) {
//         lcd.useChar(char);
//         display += ":" + char + ":";
//       });

//       lcd.clear().cursor(0, 0).print(display);

//       k++;
//     }
//   });
// });


////////////////


var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var lcd = new five.LCD({
    // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
    // Arduino pin # 7    8   9   10  11  12
    pins: [7, 8, 9, 10, 11, 12],
    rows: 4,
    cols: 20
  });

  var frame = 1;
  var frames = [":runninga:", ":runningb:"];
  var col = 0;
  var row = 0;

  // These calls will store the "runninga" and "runningb"
  // characters in the LCD's built-in memory. The LCD
  // allows up to 8 custom characters to be pre-loaded
  // into memory.
  //
  // http://johnny-five.io/api/lcd/#predefined-characters
  //
  lcd.useChar("runninga");
  lcd.useChar("runningb");

  this.loop(300, function() {
    lcd.clear().cursor(row, col).print(
      frames[frame ^= 1]
    );

    if (++col === lcd.cols) {
      col = 0;
      if (++row === lcd.rows) {
        row = 0;
      }
    }
  });
});