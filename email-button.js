//http://johnny-five.io/examples/button/

var arduino = require("johnny-five")
var board = new arduino.Board()
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

board.on("ready", function() {
  var buttonTwo = new arduino.Button(2); // 🙂 on pin 2
  var buttonFour = new arduino.Button(4) // 😢 on pin 4

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
      subject: '😢',
      text: 'testing testing testing',
      html: '<strong>😢 Please come home!😢</strong>',
    };
    sgMail.send(msg);
    console.log(msg)
  });
});