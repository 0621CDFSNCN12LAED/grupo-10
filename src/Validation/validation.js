const { body } = require("express-validator")

const ValidacionUsuario = [
    body("Nombre").notEmpty().withMessage("Debes completar el campo Nombre"),
    body("Apellido").notEmpty().withMessage("Debes completar el campo apellido"),
    body("Dirección").notEmpty().withMessage("Debes completar el campo Dirección"),
    body("Edad").notEmpty().withMessage("Debes completar el campo Edad").isLength({max:2}),
    body("Email").notEmpty().withMessage("Debes completar el campo Email").bail().isEmail("Debe ser un formato de Email Valido: ejemplo@ejemplo.com"),
    body("Contraseña").notEmpty().withMessage("Debes completar el campo Contraseña").bail().isLength({min:8}).withMessage ("La Contraseña debe tener un minimo de 8 caracteres"),
    body("repetirContraseña").notEmpty().withMessage("Debes completar el campo Repetir Contraseña").bail().isLength({min:8}).withMessage("La Contraseña debe ser identica al campo 'Contraseña' "),
]

module.exports = ValidacionUsuario