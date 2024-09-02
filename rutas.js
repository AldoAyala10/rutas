const express = require('express');
const router = express.Router();
const intMiddleware = require('./middlewares');

//RUTAS

//RAIZ
router.get("/", (req, res) => {
    res.send("Te encuentras en la raíz");
});

//RUTAS CON MIDDLEWARES
router.get('/ruta1', intMiddleware, (req, res) => {
    res.send("Ruta 1");
});

router.get('/ruta2', intMiddleware, (req, res) => {
    res.send("Ruta 2");
});

module.exports = router;