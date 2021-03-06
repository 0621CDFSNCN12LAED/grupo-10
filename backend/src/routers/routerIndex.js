const express = require("express");

const router = express.Router(); 


const indexController = require("../controller/indexController");
const sessionGuest = require("../middleware/sessionsMiddeware")
const notSession = require("../middleware/notSession")

const validarLogin = require("../Validation/validationLogin");
const ValidacionUsuario = require("../Validation/validacionRegistro");
const validarEdicionUsuario = require("../Validation/validacionEdicionUsuario");

const uploader = require("../middleware/multerUsuario");

router.get("/index", indexController.index);


router.get("/login", sessionGuest, indexController.login);
router.post("/login", validarLogin, indexController.iniciarSesion);

router.get("/profile", notSession, indexController.profile);

router.get("/logout", indexController.logout);

router.get("/registro", sessionGuest, indexController.registro);

router.post("/registro", uploader.single("img"), ValidacionUsuario, indexController.crearUsuario)

router.get("/carrito", notSession, indexController.carrito);

router.get("/edicionUsuario/:id", sessionGuest, indexController.editarUsuario);

router.put("/:id", uploader.single("img"), ValidacionUsuario, indexController.modificarUsuario)

router.delete("/:id", indexController.eliminarUsuario)






module.exports = router;