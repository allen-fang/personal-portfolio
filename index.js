const express = require('express');
const bodyParser = require('body-parser');
const sslRedirect = require('heroku-ssl-redirect'); 

const app = express();

// enable ssl redirect
app.use(sslRedirect());

app.use(bodyParser.json());

require('./routes/emailRoutes')(app);

// make sure express serves React routes correctly, only run in production.
if (process.env.NODE_ENV === 'production') {
	// Express serves up production assets (ex. main.js file or main.css file)
	app.use(express.static('client/build'));
	// Express will serve up index.html file if doesn't recognize the route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);