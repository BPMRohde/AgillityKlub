const express = require('express');
const router = express.Router();
const resultatController = require('../controller/resultatController')

router.get('/:id', resultatController.getResultater);

module.exports = router;