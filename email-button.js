//http://johnny-five.io/examples/button/
require('dotenv').config()
var arduino = require("johnny-five")
var board = new arduino.Board()
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

var userDetails = {
  email: 'nikki.ricks@gmail.com',
  phoneNumber: '61488611347@e2s.messagemedia.com'
}


board.on("ready", function() {
  var buttonTwo = new arduino.Button(2); // 🙂 on pin 2
  var buttonFour = new arduino.Button(4) // 😢 on pin 4
  var buttonSix = new arduino.Button(6) // 🦄 on pin 6

  // buttonTwo.on("up", function() {
  //   const msg = {
  //     to: '61488611347@e2s.messagemedia.com',
  //     // to: 'hey@feminest.co',
  //     from: 'nikki.ricks@gmail.com',
  //     subject: '🙂',
  //     text: 'I am having a great time, no need to come home!🙂',
  //     html: '🙂I am having a great time, no need to come home!🙂',
  //   };
  //   sgMail.send(msg);
  //   console.log(msg)
  // });

  // buttonFour.on("up", function() {
  //   const msg = {
  //     to: '61488611347@e2s.messagemedia.com',
  //     // to: 'hey@feminest.co',
  //     from: 'nikki.ricks@gmail.com',
  //     subject: '😢',
  //     text: 'Please come home!😢',
  //     html: '😢 Please come home!😢',
  //   };
  //   sgMail.send(msg);
  //   console.log(msg)
  // });

  buttonSix.on("up", function() {
    const msg = {
      to: '61488611347@e2s.messagemedia.com',
     // to: userDetails.phoneNumber,
      from: 'nikki.ricks@gmail.com',
      subject: '🙋‍♀️ Hi This is Nikki from the Meet and Greet!',
      text: 'This is not my phone number (I used an API), if you want to call or text: 0488 611 347. And some other ways to connect! EMAIL: nikki.ricks@gmail.com LINKEDIN: https://www.linkedin.com/in/nikki-ricks/ GITHUB: https://github.com/nikkiricks TWITTER: https://twitter.com/nikkiricks',
      html: 'This is not my phone number (I used an API), if you want to call or text: 0488 611 347. And some other ways to connect! EMAIL: nikki.ricks@gmail.com LINKEDIN: https://www.linkedin.com/in/nikki-ricks/ GITHUB: https://github.com/nikkiricks TWITTER: https://twitter.com/nikkiricks',
    };
    sgMail.send(msg);
    console.log(msg)
  });
});