// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'TWILIO_ACCOUNT_SID';
const authToken = 'TWILIO_AUTH_TOKEN';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Hi Jamie, this is Nikki, I am testing this out for a project in school but it will not let me use my australian phone number, when you wake up please let me know if you got this, thanks',
     from: '+12027597315',
     to: '+13128526415'
   })
  .then(message => console.log(message.sid));