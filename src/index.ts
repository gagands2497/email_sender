//https://myaccount.google.com/lesssecureapps
//Allow the less secure apps to use your mail to send mails

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'email',
    pass: 'password'
  }
});

var mailOptions = {
  from: 'your email',
  to: 'reciever\'s email',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error: any, info: { response: string; }){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});