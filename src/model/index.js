const { getMov, addMov, editMov, deleteMov } = require('./movModel');
const { login, registerCustomer } = require('./customer');
const { getReceipts, addReceipt } = require('./receiptsModel');

module.exports = {
	getMov,
	addMov,
	editMov,
	deleteMov,
	login,
	registerCustomer,
	getReceipts,
	addReceipt,
};
