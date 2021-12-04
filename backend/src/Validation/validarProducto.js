const { body } = require("express-validator");

const ValidacionProducto = [
    body("nombre").notEmpty().withMessage("Debes completar el campo Nombre").isLength({min:5}).withMessage("Debes tener al menos 5 letras"),
    body("descripcion").notEmpty().withMessage("Debes completar el campo Descripcion").isLength({min:30}).withMessage("Debes tener al menos 30 letras"),
    body("precio").notEmpty().withMessage("Debs poner un precio al producto").isLength({min:3}).withMessage("Debes poner las cuotas en las toninas"),
    body("categorias").notEmpty().withMessage("Debes tildar alguna categoria"),
    body("img").custom (function(value, { req }){
        const file = req.file;
        
        if (!file) {
            throw new Error ("tienes que subir una imagen");
        }
        return true
    }),
];
module.exports = ValidacionProducto;