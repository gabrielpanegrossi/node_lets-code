const { Router } = require('express');

const router = Router();

//movimentacoes CRUD
router.get('/information', (req, res) => {
	const returnReq = {};
	res.status(200).send(returnReq);
});

router.post('/information', function (req, res) {
	const returnReq = {};
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
