const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/categoria.controller');

router.get('/', ctrl.getCategorias);
router.post('/', ctrl.crearCategoria);

module.exports = router;
