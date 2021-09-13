const fs = require("fs");   
const path = require("path");
const functionService = require ("../services/functionService.js")

const productosController = {

listadoMuebles : function (req, res) { 
    const filtrarMuebles = functionService.filtrarMuebles()
    res.render("productosMuebles", {products: filtrarMuebles})},


listadoPlantas: function (req, res) {
    const filtrarPlantas = functionService.filtrarPlantas()
    res.render("productosPlantas", {products: filtrarPlantas})},


listadoIluminacion: function (req, res) {
    const filtrarIluminacion = functionService.filtrarIluminacion()
    res.render("productosIluminacion", {products: filtrarIluminacion})},

detalle: function (req, res) {
    const detalleProducto = functionService.buscarProductoid(req.params.id);
    res.render("detalle", {products: detalleProducto})
},
    
}

module.exports = productosController