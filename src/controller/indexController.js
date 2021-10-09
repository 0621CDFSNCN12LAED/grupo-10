const fs = require("fs");   
const path = require("path");
const functionUser = require ("../services/functionUser.js")
const { validationResult } = require ("express-validator")


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

    crearUsuario: (req, res) =>{
        const validacionCampos = validationResult(req);
        if(validacionCampos.errors.length > 0) {
            return res.render ("registro", {
                error: validacionCampos.mapped(),
                oldData: req.body, })
            }else {
                    functionUser.crearUsuario(req.body)
                        res.redirect ("/index")
                    };

    },


    editarUsuario:(req, res) => {
        const user = functionUser.buscarUserid(req.params.id);
        res.render("edicionUsuario", { user });
    },
    
    modificarUsuario: (req, res) =>{
        functionUser.modificarUsuario(req.params.id, req.body, req.file);
        res.redirect ("/index")
    },
    

    eliminarUsuario: (req, res) => {
        functionUser.eliminar (req.params.id);
        res.redirect("/index");

    },

    carrito:function (req, res) {
        res.render("carrito")
    },

};

module.exports = indexController;