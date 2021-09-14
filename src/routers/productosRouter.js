const express = require ("express")
 
const router = express.Router();

const productosController = require ("../controller/productosController")

router.get("/productosMuebles", productosController.listadoMuebles)

router.get("/productosPlantas", productosController.listadoPlantas)

router.get("/productosIluminacion", productosController.listadoIluminacion)

router.get("/detalle/:id", productosController.detalle)

router.get("/nuevoProducto", productosController.nuevoProducto)

router.get("/edicionProductos", productosController.editarProdcuto)

router.get("/Decoracion", productosController.decoracion)

router.get("/carrito", productosController.carrito)

module.exports = router