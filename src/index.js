const express = require('express');
const {app, appListen} = require('./server.js');

const listController = require('./controller/listController.js');
const reprovadosController = require('./controller/reprovadosController.js');
const aprovadosController = require('./controller/aprovadosController.js');
const aprovadosFrAltoC = require('./controller/aprovadosFrAlto.js');


app.get('/', listController.listController)

app.get('/reprovados', reprovadosController.reprovadosController)

app.get('/aprovados', aprovadosController.aprovadosController)

app.get('/aprovadosfretealto', aprovadosFrAltoC.aprovadosFrAltoC)

appListen;