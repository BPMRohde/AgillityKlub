const express = require('express');
const router = express.Router();
const staevneController = require('../controller/staevneController')

router.get('/:id', staevneController.getToAdministration)

router.post('/kategori/:id', staevneController.createKategori);

router.get('/sletKategori/:id/:kategoriid', staevneController.deleteKategori);

module.exports = router;