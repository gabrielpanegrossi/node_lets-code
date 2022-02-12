const { Router } = require('express');

const router = Router();

const { getReceipts, addReceipt } = require('../model/');
const { uploadFile } = require('../services/awsS3');

//Receipts CRUD
router.get('/movimentacao', async (req, res) => {
	const status = await getReceipts();
	res.send(status);
});

router.post('/movimentacao', async (req, res) => {
	const status = req.files.imagem;
	status.mv(__dirname + `../../../public/${req.files.imagem.name}`, (err) => {
		if (err) {
			console.log(err);
		}
	});

	const file = {
		filename: req.files.imagem.name,
		path: __dirname + `../../../public/${req.files.imagem.name}`,
	};

	const uploadToS3 = await uploadFile(file);

	const reqStatus = await addReceipt(
		req.files.imagem.name,
		uploadToS3.Location
	);

	res.status(201).send(reqStatus);
});

module.exports = router;
