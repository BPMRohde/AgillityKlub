const express = require('express');
const router = express.Router();
const homePageController = require('../controller/homePageController')

router.get('', homePageController.getStaevner);

module.exports = router;