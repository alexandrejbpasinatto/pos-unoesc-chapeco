'use strict';

var mongoose = require('mongoose'), 
	Schema = mongoose.Schema;

var BrewerySchema = new Schema({
	name: {
		type: String,
		unique: true,
		required: true
	},
	description: {
		type: String
	},
	 updated: { 
	 	type: Date, default: Date.now  
	 },
	  created: { 
	 	type: Date, default: Date.now  
	 }
});

module.exports = mongoose.model('Brewery', BrewerySchema)