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
const { body } = require("express-validator");

const ValidacionUsuario = [
    body("Nombre").notEmpty().withMessage("Debes completar el campo Nombre"),
    body("Apellido").notEmpty().withMessage("Debes completar el campo apellido"),
    body("Dirección").notEmpty().withMessage("Debes completar el campo Dirección"),
    body("Edad").notEmpty().withMessage("Debes completar el campo Edad").isLength({max:2}),
    body("Email").notEmpty().withMessage("Debes completar el campo Email"),
    body("Contraseña").notEmpty().withMessage("Debes completar el campo Contraseña").bail().isLength({min:8}).withMessage ("La Contraseña debe tener un minimo de 8 caracteres"),
    body("repetirContraseña").notEmpty().withMessage("Debes completar el campo Repetir Contraseña").bail().isLength({min:8}).withMessage("La Contraseña debe ser identica al campo 'Contraseña' "),
    body("img").customSanitizer(function(value, { req }){
        const file = req.file;
        
        if (!file) {
            throw new Error ("tienes que subir una imagen");
        }
        return true
    }),
];

router.get("/index", indexController.index);

router.get("/login", indexController.login);

 
router.get("/registro", indexController.registro);

/*no se si va primero las validaciones o el multer*/ 
router.post("/registro", uploader.single("img"), ValidacionUsuario, indexController.crearUsuario)


router.get("/edicionUsuario/:id", indexController.editarUsuario);
router.put("/:id", uploader.single("img"), indexController.modificarUsuario)
router.delete("/:id", indexController.eliminarUsuario)


router.get("/carrito", indexController.carrito);



module.exports = router;