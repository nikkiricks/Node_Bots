//http://johnny-five.io/examples/button/
require('dotenv').config()
var arduino = require("johnny-five")
var board = new arduino.Board()
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

board.on("ready", function() {
  var buttonSix = new arduino.Button(6) // 🦄 on pin 6

  buttonSix.on("up", function() {
    const msg = {
      to: '61488611347@e2s.messagemedia.com',
      from: 'nikki.ricks@gmail.com',
      subject: '🙋‍♀️ Hi This is Nikki from the Meet and Greet!',
      text: 'This is not my phone number (I used an API), if you want to call or text: 0488 611 347. And some other ways to connect! EMAIL: nikki.ricks@gmail.com LINKEDIN: https://www.linkedin.com/in/nikki-ricks/ GITHUB: https://github.com/nikkiricks TWITTER: https://twitter.com/nikkiricks',
      html: 'This is not my phone number (I used an API), if you want to call or text: 0488 611 347. And some other ways to connect! EMAIL: nikki.ricks@gmail.com LINKEDIN: https://www.linkedin.com/in/nikki-ricks/ GITHUB: https://github.com/nikkiricks TWITTER: https://twitter.com/nikkiricks',
    };
    sgMail.send(msg);
    console.log(msg)
  });
});