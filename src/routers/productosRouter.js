const express = require ("express")
 
const router = express.Router();

const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: path.join(__dirname, "../../public/img"),
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const uploader = multer({ 
    storage,
});

const productosController = require ("../controller/productosController")

router.get("/productosMuebles", productosController.listadoMuebles)


router.get("/productosPlantas", productosController.listadoPlantas)


router.get("/productosIluminacion", productosController.listadoIluminacion)


router.get("/detalle/:id", productosController.detalle)


router.get("/nuevoProducto", productosController.nuevoProducto)

router.post("/nuevoProducto", uploader.single("img"), productosController.guardarProducto)


router.get("/edicionProductos", productosController.editarProdcuto)
router.put("/edicionProductos", productosController.editarProdcuto)
router.delete("/edicionProductos", productosController.editarProdcuto)


router.get("/Decoracion", productosController.decoracion)


router.get("/carrito", productosController.carrito)


module.exports = router