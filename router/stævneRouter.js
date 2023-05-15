const express = require('express');
const router = express.Router();
const stævneController = require('../controller/stævneController')

router.get('/', stævneController.getToAdministration)

//router.post('/', tilmeldingController.registerCompetitor);

module.exports = router;