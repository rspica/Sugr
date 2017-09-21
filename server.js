// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

//Require Schemas
// var User = require('./src/schema');
var Food = require('./models/Food)');

// Create Instance of Express
var app = express();

// Sets an initial port. We'll use this later in our listener
// var PORT = process.env.PORT || 27017;
var PORT = process.env.PORT || 3001;

// Run Morgan for Logging
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static('public'));

// -------------------------------------------------
//MongoDB Configuration configuration (Change this URL to your own DB)

var dbURI = 'mongodb://localhost/foods';
mongoose.connect(dbURI, { useMongoClient: true });

var db = mongoose.connection;

db.on('error', function(err) {
	console.log('Mongoose Error: ', err);
});

db.once('open', function() {
	console.log('Mongoose connection successful.');
});

//============================================================

// Route to get all saved aoods
app.get('/api/saved', function(req, res) {
	Food.find({}).exec(function(err, doc) {
		if (err) {
			console.log(err);
		} else {
			res.send(doc);
		}
	});
});

// Route to add an aood to saved list
app.post('/api/saved', function(req, res) {
	var newFood = new Food(req.body);

	console.log(req.body);

	newFood.save(function(err, doc) {
		if (err) {
			console.log(err);
		} else {
			res.send(doc);
		}
	});
});

// Route to delete an aood from saved list
// app.delete('/api/saved/', function(req, res) {
// 	var url = req.param('url');

// 	Food.find({ url: url })
// 		.remove()
// 		.exec(function(err) {
// 			if (err) {
// 				console.log(err);
// 			} else {
// 				res.send('Deleted');
// 			}
// 		});
// });

// Any non API GET routes will be directed to our React App and handled by React Router
app.get('*', function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
	console.log('App listening on PORT: ' + PORT);
});

// // MongoDB Config Set-up
// if (process.env.NODE_ENV == 'production') {
// 	mongoose.connect('mongodb://leejane07:test123@ds149431.mlab.com:49431/heroku_jd57ng4d');
// } else {
// 	mongoose.connect('mongodb://localhost/test123');
// }

// db.on('error', err => {
// 	console.log(err);
// });

// db.once('open', err => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		// ...
// 	}
// });

// // Listener
// app.listen(PORT, function() {
// 	console.log('App listening on PORT: ' + PORT);
// });
