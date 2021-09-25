const express = require("express");

const router = express.Router(); 

const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: path.join(__dirname, "../../public/img/"),
    filename: (req, file, cb) => {
        cb(null,  "/users/" + Date.now() + path.extname(file.originalname));
    },
});

const uploader = multer({
    storage,
});

const indexController = require("../controller/indexController");



router.get("/index", indexController.index);

router.get("/login", indexController.login);
 
router.get("/registro", indexController.registro);
router.post("/registro", uploader.single("img"), indexController.crearUsuario)

router.get("/carrito", indexController.carrito);



module.exports = router;