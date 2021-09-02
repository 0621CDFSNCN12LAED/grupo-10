const express = require("express");

const formsController = require("../controller/formsController");

const router = express.Router();

router.get("/login", formsController.login);

router.get('/registro', formsController.registro)

router.get('/nuevoProducto', formsController.nuevoProducto)

router.get('/nuevoProducto', formsController.edicionProductos)

module.exports = router;