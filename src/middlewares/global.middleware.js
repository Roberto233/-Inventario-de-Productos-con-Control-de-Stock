const cors = require('cors');
const morgan = require('morgan');
const express = require('express');

const applyGlobalMiddlewares = (app) => {
  app.use(cors());
  app.use(morgan('dev'));
  app.use(express.json());
};

module.exports = applyGlobalMiddlewares;
