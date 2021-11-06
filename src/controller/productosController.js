

const baseServiceProducto = require("../services/baseServiceProducto.js");
const { Producto } = require("../database/models");

const productosController = {
    listadoMuebles: async function (req, res) {
      
       const Muebles = await Producto.findAll(
           {where: {categorias: "Muebles"}}
           );
        res.render("productosMuebles", { Producto: Muebles });
    },

    listadoPlantas: async function (req, res) {
        const Plantas = await Producto.findAll(
            {where: {categorias: "Plantas"}}
            );
        res.render("productosPlantas", { Producto: Plantas });
    },

    listadoIluminacion: async function (req, res) {
        const Iluminacion = await Producto.findAll(
            {where: {categorias: "Iluminacion"}}
            );
        res.render("productosIluminacion", { Producto: Iluminacion });
    },


    detalle: async function (req, res) {
        const id = req.params.id;
        const producto = await Producto.findByPk(id);
        res.render("detalle", { productoIndividual : producto });
      },

    nuevoProducto: function (req, res) {
        res.render("nuevoProducto");
    },

    guardarProducto: async function (req, res) {
        await Producto.create({
            ...req.body,
             //ver porque no se guarda la ruta de la imgaen en la base de datos
        }, req.file);
        res.redirect("/index");
    },


    editarProducto: async function (req, res) {
         await Producto.findByPk(req.params.id); 
        res.render("edicionProductos", { product : Producto });
    },

    modificarProducto: async function (req, res) { 
        await Producto.update(req.body, req.file, {
            where: {
          id: req.params.id,
        },
            })
            res.redirect("/index");
    },

    eliminarProducto: async function (req, res) {
        await Producto.destroy({
            where: { id: req.params.id },
        }
           
        );
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



// const functionService = require("../services/functionService.js");

// const productosController = {
//     listadoMuebles: function (req, res) {
//         const filtrarMuebles = functionService.filtrarMuebles();
//         res.render("productosMuebles", { products: filtrarMuebles });
//     },

//     listadoPlantas: function (req, res) {
//         const filtrarPlantas = functionService.filtrarPlantas();
//         res.render("productosPlantas", { products: filtrarPlantas });
//     },

//     listadoIluminacion: function (req, res) {
//         const filtrarIluminacion = functionService.filtrarIluminacion();
//         res.render("productosIluminacion", { products: filtrarIluminacion });
//     },

//     detalle: function (req, res) {
//         const detalleProducto = functionService.buscarProductoid(req.params.id);
//         res.render("detalle", { productoIndividual: detalleProducto });
//     },

//     nuevoProducto: function (req, res) {
//         res.render("nuevoProducto");
//     },

//     guardarProducto: function (req, res) {
//         functionService.crear(req.body, req.file);
//         res.redirect("/index");
//     },

//     editarProducto: function (req, res) {
//         const product = functionService.buscarProductoid(req.params.id);
//         res.render("edicionProductos", { product });
//     },

//     modificarProducto: function (req, res) {
//         functionService.modificar(req.params.id, req.body, req.file);
//         res.redirect("/index");
//     },

//     eliminarProducto: function (req, res) {
//         functionService.eliminar(req.params.id);
//         res.redirect("/index");
//     },

//     decoracion: function (req, res) {
//         res.render("Decoracion");
//     },
//     carrito: function (req, res) {
//         res.render("carrito");
//     },
// };

// module.exports = productosController;