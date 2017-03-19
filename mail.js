/**
 * Created by Selenium on 22-12-2015.
 */
var nodemailer = require("nodemailer");

var transport = nodemailer.createTransport("SMTP", {
    host: "smtp.gmail.com", // hostname
    secureConnection: true, // use SSL
    port: 465, // port for secure SMTP
    auth: {
        user: "samson.ojo@gmail.com",
        pass: "$hay0lawA"
    }
});

console.log("SMTP Configured");

var mailOptions = {
    from: 'samson.ojo@gmail.com', // sender address
    to: 'saojo@systemspecs.com.ng', // list of receivers
    subject: 'Report for Test Result', // Subject line
    text: 'Contains the test result for the smoke test in html file', // plaintext body
    attachments: [
        {
            'filename': 'Results.html',
            'filePath': './Reports/Results.html',
        }

    ]
};
transport.sendMail(mailOptions, function (error, response) {
    if (error) {
        console.log(error);
    } else {
        console.log("Message sent: " + response.message);
    }

});
