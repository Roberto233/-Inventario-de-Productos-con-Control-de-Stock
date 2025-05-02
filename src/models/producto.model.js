<<<<<<< HEAD
const mongoose = require('mongoose');
const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  precio: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' },
  historial: [
    {
      tipo: { type: String, enum: ['entrada', 'salida'] },
      cantidad: Number,
      fecha: { type: Date, default: Date.now }
    }
  ]
});
=======
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

>>>>>>> be8c1894970d6ea5661a67e5fcdd8b2c34133974
module.exports = mongoose.model('Producto', productoSchema);