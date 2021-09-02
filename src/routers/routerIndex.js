const express = require("express");

const indexController = require("../controller/indexController");

const router = express.Router();

router.get("/index", indexController.index);

router.get('/demoDecoracion', indexController.demoDecoracion);


module.exports = router;