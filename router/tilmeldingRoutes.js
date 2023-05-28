const express = require('express');
const router = express.Router();
const tilmeldingController = require('../controller/tilmeldingController')

router.get('/:staevneid', tilmeldingController.getSite)

router.post('/tilmelding/:staevneid', tilmeldingController.registerCompetitor);

module.exports = router;