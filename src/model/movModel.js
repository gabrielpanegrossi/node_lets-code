const mongoose = require('mongoose');

const movimentacoesSchema = new mongoose.Schema({
	type: String,
	value: Number,
	date: Date,
});

const Movimentacao = mongoose.model('movimentacao', movimentacoesSchema);

async function getMov() {
	try {
		const queryResult = await Movimentacao.find({});

		return { status: 'sucesso', queryResult };
	} catch (e) {
		return e;
	}
}

async function addMov(type, value) {
	try {
		const Movimentacao1 = new Movimentacao({
			type,
			value,
			date: new Date(),
		});

		await Movimentacao1.save();

		return 'sucesso';
	} catch (e) {
		return e;
	}
}

async function editMov(queryObject) {
	try {
		const { queryFilter, valueObject } = queryObject;
		const queryResult = await Movimentacao.updateOne(queryFilter, valueObject);

		return { status: 'sucesso', queryResult };
	} catch (e) {
		return e;
	}
}

async function deleteMov(queryFilter) {
	try {
		const queryResult = await Movimentacao.deleteOne(queryFilter);

		return { status: 'sucesso', queryResult };
	} catch (e) {
		return e;
	}
}

module.exports = {
	getMov,
	addMov,
	editMov,
	deleteMov,
};
