//http://johnny-five.io/examples/button/

var arduino = require("johnny-five")
var board = new arduino.Board()
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

board.on("ready", function() {
  var buttonTwo = new arduino.Button(2); // Button on pin 2
  var buttonFour = new arduino.Button(4)

  buttonTwo.on("up", function() {
    const msg = {
      to: 'nikki.ricks@gmail.com',
      from: 'hey@feminest.co',
      subject: '🙂',
      text: 'testing testing testing',
      html: '<strong>🙂I am having a great time, no need to come home!🙂</strong>',
    };
    sgMail.send(msg);
    console.log(msg)
  });

  buttonFour.on("up", function() {
    const msg = {
      to: 'nikki.ricks@gmail.com',
      from: 'hey@feminest.co',
      subject: '🙁',
      text: 'testing testing testing',
      html: '<strong>🙁 Please come home!🙁</strong>',
    };
    sgMail.send(msg);
    console.log(msg)
  });
});








// var arduino = require("johnny-five")
// , board = new arduino.Board()
// , SendGrid = require('sendgrid').SendGrid
// , sg = new SendGrid("your_sendgrid_username", "your_sendgrid_password");

// board.on("ready", function() {
//   var button = new arduino.Button(8); // Button on pin 8

//   button.on("up", function() {
//     sg.send({
//       to: "john.doe@example.com"
//       from: "jane.doe@example.com",
//       subject: "This email will be sent when you press the button",
//       html: "Go check your inbox!"
//     });
//   });
// });