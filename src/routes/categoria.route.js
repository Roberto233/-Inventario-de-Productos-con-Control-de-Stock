const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/categoria.controller');

<<<<<<< HEAD
router.post('/', ctrl.crear);
router.get('/', ctrl.listar);
router.put('/:id', ctrl.actualizar);
router.delete('/:id', ctrl.eliminar);

module.exports = router;
=======
router.get('/', ctrl.getCategorias);
router.post('/', ctrl.crearCategoria);

module.exports = router;
>>>>>>> be8c1894970d6ea5661a67e5fcdd8b2c34133974
