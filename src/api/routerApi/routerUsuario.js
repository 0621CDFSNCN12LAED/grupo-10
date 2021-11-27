const express = require("express");
const router = express.Router();

const controllerUsuario = require("../controllerApi/controllerUsuario");

router.get("/api/users/", controllerUsuario.lista);
//router.get("/api/users/:id", controllerUsuario.idUsers);
module.exports = router;
