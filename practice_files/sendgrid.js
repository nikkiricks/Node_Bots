const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'nikki.ricks@gmail.com',
  from: 'bpcrockett@gmail.com',
  subject: 'Sending this from my source code',
  text: 'testing testing testing',
  html: '<strong>it is so fun</strong>',
};
sgMail.send(msg);