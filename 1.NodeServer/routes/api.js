const express = require('express');

const route = express.Router();
const departmentsRoute = require('./apiRoute/department');

route.use('/departments',departmentsRoute);

module.exports = route;

