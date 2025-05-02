<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/producto.controller');

router.post('/', ctrl.crear);
router.get('/', ctrl.listar);
router.put('/:id', ctrl.actualizar);
router.delete('/:id', ctrl.eliminar);
router.post('/:id/movimiento', ctrl.movimiento);

module.exports = router;
=======
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/producto.controller');

router.get('/', ctrl.getProductos);
router.post('/', ctrl.crearProducto);
router.put('/:id', ctrl.actualizarProducto);
router.delete('/:id', ctrl.eliminarProducto);

module.exports = router;
>>>>>>> be8c1894970d6ea5661a67e5fcdd8b2c34133974
