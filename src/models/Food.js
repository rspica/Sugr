// Include the Mongoose Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FoodSchema = new Schema({
	user: {
		type: String,
		default: 'Carol Jenkins'
	},
	item: {
		type: String
	},

	brand: {
		type: String
	},

	sugar: {
		type: Number
	},

	date: {
		type: String
	},

	logged: {
		type: Boolean,
		default: false
	}
});

// Create the Model
var Food = mongoose.model('Food', FoodSchema);

// Export it for use elsewhere
module.exports = Food;
