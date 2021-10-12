const express = require("express");
const router = express.Router();

const productosController = require("../controller/productosController");
const notSession = require("../middleware/notSession");
const uploader = require("../middleware/multerProducto");

router.get("/productosMuebles", productosController.listadoMuebles);

router.get("/productosPlantas", productosController.listadoPlantas);

router.get("/productosIluminacion", productosController.listadoIluminacion);

router.get("/detalle/:id", notSession, productosController.detalle);
/***Creación de un producto ***/
router.get("/nuevoProducto", notSession, productosController.nuevoProducto);

router.post("/nuevoProducto",uploader.single("img"),productosController.guardarProducto);
/*** Editar un producto ***/
router.get("/edicionProductos/:id", notSession, productosController.editarProducto);

router.put("/:id", uploader.single("img"), productosController.modificarProducto);

/***Eliminar un producto ***/
router.delete("/:id", productosController.eliminarProducto);

router.get("/Decoracion", productosController.decoracion);

router.get("/carrito", notSession, productosController.carrito);

module.exports = router;
