const express = require("express");
const router = express.Router();

const controllerUsuario = require("../controllerApi/controllerUsuario");

router.get("/lista", controllerUsuario.lista);
router.get("/:id", controllerUsuario.idUsers);

module.exports = router;
