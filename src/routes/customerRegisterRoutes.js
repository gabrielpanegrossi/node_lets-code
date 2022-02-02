const { Router } = require('express');

const router = Router();

const { registerCustomer } = require('../model/');

//movimentacoes CRUD
router.get('/information', (req, res) => {
	const returnReq = {};
	res.status(200).send(returnReq);
});

router.post('/user', async function (req, res) {
	const { user, password } = req.body;
	const returnReq = await registerCustomer(user, password);
	res.status(201).send(returnReq);
});

router.put('/information', function (req, res) {
	const returnReq = {};
	res.status(201).send(returnReq);
});

router.delete('/information', function (req, res) {
	const returnReq = {};
	res.status(200).send(returnReq);
});

module.exports = router;
