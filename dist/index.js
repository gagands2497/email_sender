"use strict";
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gagands2497@gmail.com',
        pass: '$KV495400#Hm'
    }
});
var mailOptions = {
    from: 'gagands2497@gmail.com',
    to: '809gagan@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    }
    else {
        console.log('Email sent: ' + info.response);
    }
});
