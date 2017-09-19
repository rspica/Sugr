// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

//Require Schemas
var User = require("./src/schema");

// Create Instance of Express
var app = express();
var router = express.Router();

// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 27017;

// Run Morgan for Logging
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));


// Make public a static dir
app.use(express.static("public"));


// -------------------------------------------------

// MongoDB Config Set-up
if(process.env.NODE_ENV == 'production'){
  mongoose.connect('mongodb://leejane07:test123@ds149431.mlab.com:49431/heroku_jd57ng4d');
}
else{
  mongoose.connect('mongodb://localhost/test123');
}

db.on('error', (err) => {
	console.log(err);
});

db.once('open', (err) => {
	if (err) {
		console.log(err);
	} else {
		// ...
	}
});

// -------------------------------------------------

app.get("/", function(req, res) {
  res.send("Hello world");
});

// Any non API GET routes will be directed to our React App and handled by React Router
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// App is listening on Port 3000
app.listen(PORT);;
console.log(`Server running on Port ${PORT}`);






















