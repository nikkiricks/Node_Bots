//http://johnny-five.io/examples/button/
require('dotenv').config()
var arduino = require("johnny-five")
var board = new arduino.Board()
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

board.on("ready", function() {
  var buttonTwo = new arduino.Button(2); // 🙂 on pin 2
  var buttonFour = new arduino.Button(4) // 😢 on pin 4

  buttonTwo.on("up", function() {
    const msg = {
      to: '61488611347@e2s.messagemedia.com',
      from: 'nikki.ricks@gmail.com',
      subject: '🙂',
      text: 'I am having a great time, no need to come home!🙂',
      html: '<strong>🙂I am having a great time, no need to come home!🙂</strong>',
    };
    sgMail.send(msg);
    console.log(msg)
  });

  buttonFour.on("up", function() {
    const msg = {
      to: '61488611347@e2s.messagemedia.com',
      from: 'nikki.ricks@gmail.com',
      subject: '😢',
      text: 'Please come home!😢',
      html: '<strong>😢 Please come home!😢</strong>',
    };
    sgMail.send(msg);
    console.log(msg)
  });
});