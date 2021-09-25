const fs = require("fs");   
const path = require("path");
const functionUser = require ("../services/functionUser.js")

const indexController = {
    index: function (req, res) {
        res.render("index")
    },
    login:function (req, res) {
        res.render("login")
    },
    registro:function (req, res) {
        res.render("registro")
    },
    carrito:function (req, res) {
        res.render("carrito")
    },
    crearUsuario: (req, res) =>{
        functionUser.crearUsuario(req.body, req.file)
        res.redirect ("/index")
    },
    modificarUsuario: (req, res) =>{
        functionUser.modificarUsuario(req.params.id, req.body, req.file);
        res.redirect ("/index")
    },
    editarUsuario:(req, res) => {
        const user = functionUser.buscarUserid(req.params.id);
        res.render("edicionUsuario", { user });
    },

};

module.exports = indexController;