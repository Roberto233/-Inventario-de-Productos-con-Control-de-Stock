const Producto = require('../models/producto.model');

exports.getProductos = async (req, res) => {
  const productos = await Producto.find().populate('categoria');
  res.json(productos);
};

exports.crearProducto = async (req, res) => {
  const nuevo = new Producto(req.body);
  const producto = await nuevo.save();
  res.status(201).json(producto);
};

exports.actualizarProducto = async (req, res) => {
  const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(producto);
};

exports.eliminarProducto = async (req, res) => {
  await Producto.findByIdAndDelete(req.params.id);
  res.status(204).end();
};