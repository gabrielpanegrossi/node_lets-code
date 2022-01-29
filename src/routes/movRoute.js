const { Router } = require('express');
const { getMov, addMov, editMov, deleteMov } = require('../model/');

const router = Router();

//Health
router.get('/health', function (req, res) {
	res.status(200).send({ message: "Hello you're healthy!" });
});

//movimentacoes CRUD
router.get('/movimentacao', async (req, res) => {
	const status = await getMov();
	res.send(status);
});

router.post('/movimentacao', async (req, res) => {
	const { user, type, value } = req.body;

	const status = await addMov(user, type, value);

	res.status(201).send(status);
});

router.put('/movimentacao', async (req, res) => {
	const status = await editMov(req.body);

	res.status(201).send(status);
});

router.delete('/movimentacao', async (req, res) => {
	const status = await deleteMov(req.body);
	res.status(200).send(status);
});

module.exports = router;
