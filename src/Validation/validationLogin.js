const { body } = require("express-validator");

const validarLogin = [
    body("Email").isEmail().withMessage("Debe ser un email"),
    body("Contraseña").isLength({min:8}).withMessage ("La Contraseña no coincide con el usuario"),
];

module.exports = validarLogin;