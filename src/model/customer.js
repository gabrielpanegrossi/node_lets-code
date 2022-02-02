const mongoose = require('mongoose');

const customerRegisterSchema = new mongoose.Schema({
	user: String,
	password: Number,
	date: Date,
});

const CustomerRegister = mongoose.model(
	'customerRegistry',
	customerRegisterSchema
);

async function login(user, reqPassword) {
	const queryResult = await CustomerRegister.find({ user });
	const { password } = queryResult[0];

	if (`${password}` === reqPassword && queryResult) {
		return { status: 'sucesso', queryResult };
	} else {
		return { status: 'Erro, usuario ou senha encorretos', queryResult };
	}
}

async function registerCustomer(user, password) {
	try {
		const customerRegistry = new CustomerRegister({
			user,
			password,
			date: new Date(),
		});

		await customerRegistry.save();

		return 'sucesso';
	} catch (e) {
		return e;
	}
}

async function editMov(queryObject) {
	try {
		const { queryFilter, valueObject } = queryObject;
		const queryResult = await CustomerRegister.updateOne(
			queryFilter,
			valueObject
		);

		return { status: 'sucesso', queryResult };
	} catch (e) {
		return e;
	}
}

async function deleteMov(queryFilter) {
	try {
		const queryResult = await CustomerRegister.deleteOne(queryFilter);

		return { status: 'sucesso', queryResult };
	} catch (e) {
		return e;
	}
}

module.exports = {
	login,
	registerCustomer,
};
