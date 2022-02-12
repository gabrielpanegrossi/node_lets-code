const mongoose = require('mongoose');

const receiptsSchema = new mongoose.Schema({
	fileName: String,
	url: String,
	date: Date,
});

const Receipts = mongoose.model('Receipts', receiptsSchema);

async function getReceipts() {
	try {
		const queryResult = await Receipts.find({});

		return { status: 'sucesso', queryResult };
	} catch (e) {
		return e;
	}
}

async function addReceipt(fileName, url) {
	try {
		const Receipt = new Receipts({
			fileName,
			url,
			date: new Date(),
		});

		await Receipt.save();

		return 'imagem salva com sucesso!';
	} catch (e) {
		return e;
	}
}

module.exports = {
	getReceipts,
	addReceipt,
};
