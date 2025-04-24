const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' },
  stock: { type: Number, default: 0 },
  historial: [
    {
      tipo: String, // entrada o salida
      cantidad: Number,
      fecha: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model('Producto', productoSchema);