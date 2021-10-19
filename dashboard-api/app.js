const express = require('express');
const path = require('path');
const app = express();
const DashboardController = require('./controller/dashboard_controller');

// app.use(express.static(path.join(__dirname, '../dashboard-www/build')));
app.use('/', DashboardController);

module.exports = app;