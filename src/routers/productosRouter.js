const express = require ("express")

const productosController = require ("../controller/productosController")

const router = express.Router ();

router.get ("/productosMuebles", productosController.listadoMuebles)

router.get ("/productosPlantas", productosController.listadoPlantas)

router.get ("/productosIluminacion", productosController.listadoIluminacion)

router.get ("/detalle", productosController.detalle)

module.exports = router