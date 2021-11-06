const { body } = require("express-validator");

const ValidacionUsuario = [
    body("Nombre").notEmpty().withMessage("Debes completar el campo Nombre"),
    body("Apellido").notEmpty().withMessage("Debes completar el campo apellido"),
    body("Direccion").notEmpty().withMessage("Debes completar el campo Dirección"),
    body("Edad").notEmpty().withMessage("Debes completar el campo Edad").isLength({max:2}),
    body("Email").isEmail().withMessage("Debes completar el campo Email"),
    body("contraseña").isLength({min:8}).withMessage ("La Contraseña debe tener un minimo de 8 caracteres"),
    body("img").custom (function(value, { req }){
        const file = req.file;
        
        if (!file) {
            throw new Error ("tienes que subir una imagen");
        }
        return true
    }),
];
module.exports = ValidacionUsuario;