const express = require('express');
const listaCtrl = require('../controllers/ListaContato');


const router = express.Router();

router.get('/', listaCtrl.recuperarTodas);

router.post('/',listaCtrl.salvar);

module.exports = router;