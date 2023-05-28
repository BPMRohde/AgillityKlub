const express = require('express');
const router = express.Router();
const resultController = require('../controller/setResultsController')

router.get('/:id', resultController.getResultater);

module.exports = router;