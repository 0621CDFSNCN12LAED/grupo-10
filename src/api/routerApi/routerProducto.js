const express = require("express");
const router = express.Router();

const controllerProducto = require("../controllerApi/controllerProducto");

router.get("/lista", controllerProducto.lista);
router.get("/:id", controllerProducto.idProducto);

module.exports = router;
