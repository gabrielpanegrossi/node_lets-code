const dotenv = require('dotenv');
dotenv.config();
const mongoUser = process.env.MONGO_USER;
const mongoPassword = process.env.MONGO_PASSWORD;
const mongoUrl = process.env.MONGO_URL;

const mongoose = require('mongoose');

mongoose.connect(
	`mongodb+srv://${mongoUser}:${mongoPassword}@${mongoUrl}/myFirstDatabase?retryWrites=true&w=majority`,
	(err, res) => {
		console.log('Mongo conectado com sucesso');
	}
);

require('./server');
