const Categoria = require('../models/categoria.model');

exports.getCategorias = async (req, res) => {
  const categorias = await Categoria.find();
  res.json(categorias);
};

exports.crearCategoria = async (req, res) => {
  const nueva = new Categoria(req.body);
  const categoria = await nueva.save();
  res.status(201).json(categoria);
};
