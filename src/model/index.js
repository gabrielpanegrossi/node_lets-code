const { getMov, addMov, editMov, deleteMov } = require('./movModel');
const { login, registerCustomer } = require('./customer');

module.exports = {
	getMov,
	addMov,
	editMov,
	deleteMov,
	login,
	registerCustomer,
};
