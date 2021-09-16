const functionService = require("../services/functionService.js");

const productosController = {
    listadoMuebles: function (req, res) {
        const filtrarMuebles = functionService.filtrarMuebles();
        res.render("productosMuebles", { products: filtrarMuebles });
    },

    listadoPlantas: function (req, res) {
        const filtrarPlantas = functionService.filtrarPlantas();
        res.render("productosPlantas", { products: filtrarPlantas });
    },

    listadoIluminacion: function (req, res) {
        const filtrarIluminacion = functionService.filtrarIluminacion();
        res.render("productosIluminacion", { products: filtrarIluminacion });
    },

    detalle: function (req, res) {
        const detalleProducto = functionService.buscarProductoid(req.params.id);
        res.render("detalle", { productoIndividual: detalleProducto });
    },

    nuevoProducto: function (req, res) {
        res.render("nuevoProducto");
    },

    guardarProducto: function (req, res) {
        functionService.crear(req.body, req.file);
        res.redirect("/index");
    },

    editarProducto: function (req, res) {
        const product = functionService.buscarProductoid(req.params.id);
        res.render("edicionProductos", { product });
    },

    modificarProducto: function (req, res) {
        functionService.modificar(req.params.id, req.body, req.file);
        res.redirect("/index");
    },

    eliminarProducto: function (req, res) {
        functionService.eliminar(req.params.id);
        res.redirect("/index");
    },

    decoracion: function (req, res) {
        res.render("Decoracion");
    },
    carrito: function (req, res) {
        res.render("carrito");
    },
};

module.exports = productosController;
