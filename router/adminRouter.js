const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController')

router.get('', adminController.getStaevner);

router.post('/staevne', adminController.create)

router.get('/:id', adminController.deleteStaevne)

module.exports = router;