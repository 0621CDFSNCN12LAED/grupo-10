const express = require("express");

const indexController = require("../controller/indexController");

const router = express.Router(); 

router.get("/index", indexController.index);

router.get("/login", indexController.login);
 
router.get("/registro", indexController.registro);

router.get("/carrito", indexController.carrito);


module.exports = router;