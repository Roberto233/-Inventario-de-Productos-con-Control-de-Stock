<<<<<<< HEAD
const express = require('express');
const connectDB = require('./config/db');
const applyGlobalMiddleware = require('./middlewares/global.middleware');

const categoriaRoutes = require('./routes/categoria.route');
const productoRoutes = require('./routes/producto.route');
const reporteController = require('./controllers/reporte.controller');

const app = express();

connectDB();
applyGlobalMiddleware(app);

app.use('/api/categorias', categoriaRoutes);
app.use('/api/productos', productoRoutes);
app.get('/api/reportes/stock-bajo', reporteController);

module.exports = app;
=======
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
>>>>>>> be8c1894970d6ea5661a67e5fcdd8b2c34133974
