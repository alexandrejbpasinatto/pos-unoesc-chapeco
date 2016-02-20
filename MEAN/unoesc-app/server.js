'use strict';

var config = require('./config/config'),
	mongoose = require('mongoose');

var db = mongoose.connect(config.db, function(err){
	if (err) {
		console.error('não foi possivel conectar ao mongo db');
		console.log(err);
	};
});

var app = require('./config/express')(db);

console.log(config);
app.listen(config.port);

exports = module.exports = app;

console.log('Unoesc App funcionando na porta' + config.port);