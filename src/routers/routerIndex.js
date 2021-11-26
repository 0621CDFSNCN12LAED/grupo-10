const express = require("express");

const router = express.Router(); 


const indexController = require("../controller/indexController");
const sessionGuest = require("../middleware/sessionsMiddeware")
const notSession = require("../middleware/notSession")

const validarLogin = require("../Validation/validationLogin");
const ValidacionUsuario = require("../Validation/validacionRegistro");
const validacionEdicionUsuario = require("../Validation/validacionEdicionUsuario");
const uploader = require("../middleware/multerUsuario");

router.get("/index", indexController.index);


router.get("/login", sessionGuest, indexController.login);
router.post("/login", validarLogin, indexController.iniciarSesion);

router.get("/profile", notSession, indexController.profile);

router.get("/logout", indexController.logout);

router.get("/registro", sessionGuest, indexController.registro);
router.post("/registro", uploader.single("img"), ValidacionUsuario, indexController.crearUsuario)


router.get("/edicionUsuario/:id", sessionGuest, indexController.editarUsuario);
router.put("/:id", uploader.single("img"), validacionEdicionUsuario, indexController.modificarUsuario)
router.delete("/:id", indexController.eliminarUsuario)


router.get("/carrito", notSession, indexController.carrito);



module.exports = router;