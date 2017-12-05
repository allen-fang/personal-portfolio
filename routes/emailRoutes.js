const nodemailer = require('nodemailer');
const keys = require('../config/keys');

let transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: keys.senderEmail,
		pass: keys.senderPass
	}
});

module.exports = app => {
	app.post('/api/email', async (req, res) => {
		console.log(req.body);
		const { name, email, subject, message } = req.body;
		var emailBody = `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`;
		var mailOptions = {
			from: keys.senderEmail,
			to: keys.recievingEmail,
			subject: subject,
			html: emailBody
		};
		transporter.sendMail(mailOptions, function(error, info) {
			if (error) {
				console.log(error);
			} else {
				console.log('Email sent: ' + info.response);
			}
		});
		res.send({});
	});
};
