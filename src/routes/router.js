var express = require('express');
var router = express.Router();
var Food = require('../models/Food');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/log', function(req, res, next) {
	res.render('index', { title: 'Food Log' });
});

router.get('/api/saved', function(req, res, next) {
	res.render('index', { user: user, item: item, brand: brand, sugar: sugar, date: date, logged: logged });
});

router.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
});
// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered
router.get('/api/saved', function(req, res) {
	// We will find all the records, sort it in descending order, then limit the records to 5
	Food.find({}).exec(function(err, doc) {
		if (err) {
			console.log(err);
		} else {
			res.json(doc);
		}
	});
});

router.get('/test', function(req, res) {
	res.json('hello world');
});

// This is the route we will send POST requests to save each search.
router.post('/api/saved', function(req, res) {
	let newFood = new Food(req.body);
	Food.find({}).exec(function(err, doc) {
		if (err) {
			console.log(err);
		} else {
			res.json(doc);
		}
	});
	newFood.save(function(err, doc) {
		if (err) {
			alert(err);
		} else {
			console.log(doc);
			res.send(doc);
		}
	});
});

module.exports = router;
