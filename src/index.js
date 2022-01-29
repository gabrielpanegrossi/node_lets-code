const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/', (err, res) => {
	console.log('Mongo conectado com sucesso');
});

require('./server');
