//http://johnny-five.io/examples/button/
require('dotenv').config()
var arduino = require("johnny-five")
var board = new arduino.Board()
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

board.on("ready", function() {
  var buttonTwo = new arduino.Button(2); // 🙂 on pin 2
  var buttonFour = new arduino.Button(4) // 😢 on pin 4
  var buttonSix = new arduino.Button(6) // 🦄 on pin 6

  buttonTwo.on("up", function() {
    const msg = {
      to: '61488611347@e2s.messagemedia.com',
      // to: 'hey@feminest.co',
      from: 'nikki.ricks@gmail.com',
      subject: '🙂',
      text: 'I am having a great time, no need to come home!🙂',
      html: '🙂I am having a great time, no need to come home!🙂',
    };
    sgMail.send(msg);
    console.log(msg)
  });

  buttonFour.on("up", function() {
    const msg = {
      to: '61488611347@e2s.messagemedia.com',
      // to: 'hey@feminest.co',
      from: 'nikki.ricks@gmail.com',
      subject: '😢',
      text: 'Please come home!😢',
      html: '😢 Please come home!😢',
    };
    sgMail.send(msg);
    console.log(msg)
  });

  buttonSix.on("up", function() {
    const msg = {
      to: '61488611347@e2s.messagemedia.com',
      // to: 'hey@feminest.co',
      from: 'nikki.ricks@gmail.com',
      subject: '',
      text: `Hi! It was so lovely meeting you tonight. <br> My name is Nikki Ricks and I am looking for a software engineering role. This is not my phone number (I used an API), if you want to call or text, please contact me at 0488 611 347. <br> Here are some other ways I'm more than happy to connect: <br> EMAIL: nikki.ricks@gmail.com <br>  LINKEDIN: https://www.linkedin.com/in/nikki-ricks/ <br> GITHUB: https://github.com/nikkiricks <br> TWITTER: https://twitter.com/nikkiricks`,
      html: '',
    };
    sgMail.send(msg);
    console.log(msg)
  });


});