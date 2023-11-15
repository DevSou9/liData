const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;

const appListen = app.listen(port);

module.exports = {app, appListen};