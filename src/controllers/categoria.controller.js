const Categoria = require('../models/categoria.model');

<<<<<<< HEAD
exports.crear = async (req, res) => {
  try {
    const nueva = new Categoria(req.body);
    const guardada = await nueva.save();
    res.status(201).json(guardada);
  } catch (err) {
    res.status(400).json({ error: 'Error al crear categoría', detalle: err.message });
  }
};

exports.listar = async (req, res) => {
=======
exports.getCategorias = async (req, res) => {
>>>>>>> be8c1894970d6ea5661a67e5fcdd8b2c34133974
  const categorias = await Categoria.find();
  res.json(categorias);
};

<<<<<<< HEAD
exports.actualizar = async (req, res) => {
  try {
    const actualizada = await Categoria.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizada) return res.status(404).json({ error: 'Categoría no encontrada' });
    res.json(actualizada);
  } catch (err) {
    res.status(400).json({ error: 'Error al actualizar categoría', detalle: err.message });
  }
};

exports.eliminar = async (req, res) => {
  try {
    const eliminada = await Categoria.findByIdAndDelete(req.params.id);
    if (!eliminada) return res.status(404).json({ error: 'Categoría no encontrada' });
    res.json({ mensaje: 'Categoría eliminada' });
  } catch (err) {
    res.status(400).json({ error: 'Error al eliminar categoría', detalle: err.message });
  }
};
=======
exports.crearCategoria = async (req, res) => {
  const nueva = new Categoria(req.body);
  const categoria = await nueva.save();
  res.status(201).json(categoria);
};
>>>>>>> be8c1894970d6ea5661a67e5fcdd8b2c34133974
