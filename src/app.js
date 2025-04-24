const express = require('express');

const productoRoutes = require('./routes/producto.routes');
const categoriaRoutes = require('./routes/categoria.routes');
const applyGlobalMiddlewares = require('./middlewares/global.middleware');

const app = express();

// Middlewares
applyGlobalMiddlewares(app);


// Rutas
app.use('/api/productos', productoRoutes);
app.use('/api/categorias', categoriaRoutes);

module.exports = app;
