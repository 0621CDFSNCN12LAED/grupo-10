const functionService = require ("../services/functionService.js")

const formsController = {
    login: function (req, res) {
        res.render("login.ejs");
    },
    registro: function(req, res) {
        res.render('registro.ejs')
    },
    nuevoProducto: function(req, res){
        res.render('nuevoProducto.ejs')
    },
    edicionProductos: function(req, res){
        res.render('edicionProductos.ejs')
    },
};

module.exports = formsController;