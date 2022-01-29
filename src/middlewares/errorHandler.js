const errorHandler = (err, req, res, next) => {
	console.log('erro');

	next(err);
};

module.exports = errorHandler;
