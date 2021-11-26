const { body } = require("express-validator");

const ValidacionEdicionUsuario = [
    body("Nombre").notEmpty().withMessage("Debes completar el campo Nombre").isLength({min:2}).withMessage("Debes tener almenos 2 letras"),
    body("Apellido").notEmpty().withMessage("Debes completar el campo apellido").isLength({min:2}).withMessage("Debes tener almenos 2 letras"),
    body("Direccion").notEmpty().withMessage("Debes completar el campo Dirección").isLength({min:2}).withMessage("Debes tener almenos 2 letras"),
    body("Edad").notEmpty().withMessage("Debes completar el campo Edad").isLength({min:2, max:2}).withMessage("Debe tener 2 digitos"),
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
module.exports = ValidacionEdicionUsuario;