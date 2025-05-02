<<<<<<< HEAD
const Producto = require('../models/producto.model');

exports.crear = async (req, res) => {
  try {
    const nuevo = new Producto(req.body);
    const guardado = await nuevo.save();
    res.status(201).json(guardado);
  } catch (err) {
    res.status(400).json({ error: 'Error al crear producto', detalle: err.message });
  }
};

exports.listar = async (req, res) => {
  const filtro = {};
  if (req.query.categoria) filtro.categoria = req.query.categoria;
  if (req.query.stock_bajo === 'true') filtro.stock = { $lt: 5 };
  const productos = await Producto.find(filtro).populate('categoria', 'nombre');
  res.json(productos);
};

exports.actualizar = async (req, res) => {
  try {
    const actualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(actualizado);
  } catch (err) {
    res.status(400).json({ error: 'Error al actualizar producto', detalle: err.message });
  }
};

exports.eliminar = async (req, res) => {
  try {
    const eliminado = await Producto.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json({ mensaje: 'Producto eliminado' });
  } catch (err) {
    res.status(400).json({ error: 'Error al eliminar producto', detalle: err.message });
  }
};

exports.movimiento = async (req, res) => {
  const { tipo, cantidad } = req.body;
  if (!['entrada', 'salida'].includes(tipo)) {
    return res.status(400).json({ error: 'Tipo de movimiento inválido' });
  }

  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });

    if (tipo === 'salida' && producto.stock < cantidad) {
      return res.status(400).json({ error: 'Stock insuficiente para salida' });
    }

    producto.stock += tipo === 'entrada' ? cantidad : -cantidad;
    producto.historial.push({ tipo, cantidad });
    await producto.save();

    res.json({ mensaje: 'Movimiento registrado', producto });
  } catch (err) {
    res.status(400).json({ error: 'Error al registrar movimiento', detalle: err.message });
  }
};
=======
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
>>>>>>> be8c1894970d6ea5661a67e5fcdd8b2c34133974
