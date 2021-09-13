const functionService = require ("../services/functionService.js")

const carritoController = {
    carrito: function (req, res) {
        res.render("carrito.ejs");
    },
};

module.exports = carritoController;
