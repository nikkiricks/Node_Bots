//http://johnny-five.io/examples/button/
require('dotenv').config()
var arduino = require("johnny-five")
var board = new arduino.Board()
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

board.on("ready", function() {
  var button = new arduino.Button(6) 

  button.on("up", function() {
    const msg = {
      // text only
      // to: '61403369786@e2s.messagemedia.com',

      // email only
      // to: ['sam.gilding@tabcorp.com.au', 'nikki.ricks@gmail.com'],

      // both text and email
      to: ['jonathan-samuel@hotmail.com', '61400860869@e2s.messagemedia.com', 'nikki.ricks@gmail.com'],

      from: 'nikki.ricks@gmail.com',
      subject: '🙋‍♀️ Hi! Nikki from the Meet and Greet.',
      html: "Let's connect! 📞: 0488 611 347 📧: nikki.ricks@gmail.com 🔗: https://www.linkedin.com/in/nikki-ricks/ 🤓: https://github.com/nikkiricks",
    };
    sgMail.send(msg);
    console.log(msg)
  });
});