const express = require('express');
const router = express.Router();
const tilmeldingController = require('../controller/tilmeldingController')

router.post('/', tilmeldingController.registerCompetitor);

module.exports = router;