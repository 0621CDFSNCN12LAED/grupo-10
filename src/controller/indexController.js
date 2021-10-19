const fs = require("fs");   
const path = require("path");
const bcryptjs = require ("bcryptjs")
const functionUser = require ("../services/functionUser.js");
const { validationResult } = require ("express-validator");


const indexController = {
    index: function (req, res) {
        res.render("index")
    },

    login:function (req, res) {

        res.render("login")
    },

    iniciarSesion:function (req, res) {
        
        // const validacionCampos = validationResult(req);
        // if(validacionCampos.errors.length > 0) {
        //     return res.render ("login", {
        //         errors: validacionCampos.mapped(),
        //     })};
        
        const usuarioLogin = functionUser.buscarCampoEspecifico (req.body.email);
             if(usuarioLogin){ 
                 const contraseñaOK = bcryptjs.compareSync(req.body.contraseña,usuarioLogin.contraseña );
                 if (contraseñaOK){
                     delete usuarioLogin.contraseña
                     req.session.user = usuarioLogin;

                     /* para recordar usuario en el navegador con cookies (se una el cookie parser en app.js como middleware que cruza toda la aplicacion) */

                    if(req.body.term) {
                        res.cookie("userEmail", req.body.Email)
                    }

                     return res.render ("profile", {user: req.session.user})
                 }
                 return res.render ("login", {
                    errors:{
                        email:{msg: "las credenciales no corresponde al usuario"}
                    }});               
             };

        return res.render ("login", {
            errors:{
                email:{msg: "el mail no coincide con ningun usuario"}
            }});      
    },

    profile: function (req, res){
        res.render ("profile");
    },

    logout: function (req, res ) {
        res.clearCookie("userEmail")
        req.session.destroy();
        return res.redirect ("/index")
    },

    registro:function (req, res) { 
        res.render("registro");
    },

    crearUsuario: (req, res) =>{

        const validacionCampos = validationResult(req);
        if(validacionCampos.errors.length > 0) {
            return res.render ("registro", {
                errors: validacionCampos.mapped(),
            })};

        const noRepetirEmail = functionUser.buscarCampoEspecifico (req.body.Email);
        if(noRepetirEmail){
            return res.render ("registro", {
                errors:{
                    Email:{msg: "este Email ya esta registrado"}
                },
                oldData: req.body
            })
        }else {
            functionUser.crearUsuario(req.body, req.file)
        res.redirect ("login")
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