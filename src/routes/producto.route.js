const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/producto.controller');

router.get('/', ctrl.getProductos);
router.post('/', ctrl.crearProducto);
router.put('/:id', ctrl.actualizarProducto);
router.delete('/:id', ctrl.eliminarProducto);

module.exports = router;