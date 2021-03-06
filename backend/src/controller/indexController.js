
const bcryptjs = require ("bcryptjs")

const { validationResult } = require ("express-validator");

const {Op} = require('sequelize')

const { Usuario } = require ("../database/models")


const indexController = {
    index: function (req, res) {
        res.render("index")
    },

    login:function (req, res) {

        res.render("login")
    },

    iniciarSesion: async function (req, res) {
        
        const validacionCampos = validationResult(req);
        if(validacionCampos.errors.length > 0) {
            return res.render ("login", {
                errors: validacionCampos.mapped(),
            })};
            
        
        const usuarioLogin = await Usuario.findOne ({where: {Email:req.body.Email}});
            
             if(usuarioLogin){ 
                 const contraseñaOK =  bcryptjs.compareSync(req.body.contraseña,usuarioLogin.contraseña );
                 console.log (contraseñaOK);
                 if (contraseñaOK){
                     delete usuarioLogin.contraseña
                     req.session.usuarioLogeado = usuarioLogin;

                    if(req.body.term) {
                        res.cookie("Email", req.body.Email, {maxAge: 60000 * 60 * 24})
                    }
                      return res.redirect ("/profile")
                     
                 }
                 return res.render ("login", {
                    errors:{
                        Email:{msg: "las credenciales no corresponde al usuario"}
                    }});               
             };

        return res.render ("login", {
            errors:{
                Email:{msg: "el mail no coincide con ningun usuario"}
            }});      
    },

    profile: function (req, res){
        res.render ("profile", {
            usuario: req.session.usuarioLogeado
        });
    },

    logout:  function (req, res ) {
        res.clearCookie("Email");
        req.session.destroy();
        return res.redirect ("/index")
    },

    registro:function (req, res) {  
        res.render("registro");
    },

    crearUsuario: async function (req, res) {
        
        const validacionCampos = validationResult(req);
        if(validacionCampos.errors.length > 0) {
            return res.render ("registro", {
                errors: validacionCampos.mapped(),
            })};

        const noRepetirEmail = await Usuario.findOne ({where: {Email:req.body.Email}})
        
        if(noRepetirEmail){
            return res.render ("registro", {
                errors:{
                    Email:{msg: "este Email ya esta registrado"}
                },
                oldData: req.body
            })
        }else {
            await Usuario.create(
                {
                ...req.body,
                contraseña: bcryptjs.hashSync(req.body.contraseña, 12),
                img: req.file ? req.file.filename: "default-image.png",
                
                })
            }
           
         return res.redirect ("/login")
        
        
    },
    
    editarUsuario: async function (req, res){
        const usuario = await Usuario.findByPk (req.params.id);
        res.render("edicionUsuario", { Usuario : usuario });
    },
    
    modificarUsuario: async function (req, res){

        const validacionCampos = validationResult(req);
        console.log (validacionCampos)
        const usuario = await Usuario.findByPk (req.params.id);
        if(validacionCampos.errors.length > 0) {
            return res.render ("edicionUsuario", {
                errors: validacionCampos.mapped(),
                Usuario : usuario
            })};

        await Usuario.update(
            {...req.body,
                contraseña: bcryptjs.hashSync(req.body.contraseña, 12),
                img: req.file ? req.file.filename: "default-image.png", 
            },{
            where:{id:req.params.id }
        });
        res.redirect ("/index")
    },
    
    eliminarUsuario: async function (req, res){
        await  Usuario.destroy({where: {id:req.params.id}});
        res.redirect("/index" );

    },

    carrito:function (req, res) {
        res.render("carrito")
    },

};

module.exports = indexController;

// const bcryptjs = require ("bcryptjs")
// const functionUser = require ("../services/functionUser.js");
// const { validationResult } = require ("express-validator");


// const indexController = {
//     index: function (req, res) {
//         res.render("index")
//     },

//     login:function (req, res) {

//         res.render("login")
//     },

//     iniciarSesion:function (req, res) {
        
//         const validacionCampos = validationResult(req);
//         if(validacionCampos.errors.length > 0) {
//             return res.render ("login", {
//                 errors: validacionCampos.mapped(),
//             })};
        
//         const usuarioLogin = functionUser.buscarCampoEspecifico (req.body.email);
//              if(usuarioLogin){ 
//                  const contraseñaOK = bcryptjs.compareSync(req.body.contraseña,usuarioLogin.contraseña );
//                  if (contraseñaOK){
//                      delete usuarioLogin.contraseña
//                      req.session.user = usuarioLogin;

//                      /* para recordar usuario en el navegador con cookies (se una el cookie parser en app.js como middleware que cruza toda la aplicacion) */

//                     if(req.body.term) {
//                         res.cookie("userEmail", req.body.Email)
//                     }

//                      return res.render ("profile", {user: req.session.user})
//                  }
//                  return res.render ("login", {
//                     errors:{
//                         email:{msg: "las credenciales no corresponde al usuario"}
//                     }});               
//              };

//         return res.render ("login", {
//             errors:{
//                 email:{msg: "el mail no coincide con ningun usuario"}
//             }});      
//     },

//     profile: function (req, res){
//         res.render ("profile");
//     },

//     logout: function (req, res ) {
//         res.clearCookie("userEmail")
//         req.session.destroy();
//         return res.redirect ("/index")
//     },

//     registro:function (req, res) { 
//         res.render("registro");
//     },

//     crearUsuario: (req, res) =>{

//         const validacionCampos = validationResult(req);
//         if(validacionCampos.errors.length > 0) {
//             return res.render ("registro", {
//                 errors: validacionCampos.mapped(),
//             })};

//         const noRepetirEmail = functionUser.buscarCampoEspecifico (req.body.Email);
//         if(noRepetirEmail){
//             return res.render ("registro", {
//                 errors:{
//                     Email:{msg: "este Email ya esta registrado"}
//                 },
//                 oldData: req.body
//             })
//         }else {
//             functionUser.crearUsuario(req.body, req.file)
//         res.redirect ("login")
//         };
        
//     },

//     editarUsuario:(req, res) => {
//         const user = functionUser.buscarUserid(req.params.id);
//         res.render("edicionUsuario", { user });
//     },
    
//     modificarUsuario: (req, res) =>{
//         functionUser.modificarUsuario(req.params.id, req.body, req.file);
//         res.redirect ("/index")
//     },
    
//     eliminarUsuario: (req, res) => {
//         functionUser.eliminar (req.params.id);
//         res.redirect("/index");

//     },

//     carrito:function (req, res) {
//         res.render("carrito")
//     },

// };

// module.exports = indexController;