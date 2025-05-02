<<<<<<< HEAD
const express = require('express');
const cors = require('cors');

const applyGlobalMiddleware = (app) => {
  app.use(cors());
  app.use(express.json());
};

module.exports = applyGlobalMiddleware;
=======
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');

const applyGlobalMiddlewares = (app) => {
  app.use(cors());
  app.use(morgan('dev'));
  app.use(express.json());
};

module.exports = applyGlobalMiddlewares;
>>>>>>> be8c1894970d6ea5661a67e5fcdd8b2c34133974
