const mongoose = require('mongoose');
<<<<<<< HEAD
const categoriaSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true }
});
module.exports = mongoose.model('Categoria', categoriaSchema);
=======

const categoriaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
});

module.exports = mongoose.model('Categoria', categoriaSchema);
>>>>>>> be8c1894970d6ea5661a67e5fcdd8b2c34133974
