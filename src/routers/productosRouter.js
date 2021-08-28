const express = require ("express")

const productosController = require ("../controller/productosController")

const router = express.Router ();

router.get ("/productosMuebles", productosController.listadoProductos)

module.exports = router