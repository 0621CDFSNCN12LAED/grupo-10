
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
                 const contraseñaOK =  bcryptjs.compareSync(req.body.Contraseña,usuarioLogin.Contraseña );
                 if (contraseñaOK){
                     delete usuarioLogin.Contraseña
                     req.session.usuarioLogeado = usuarioLogin;

                    if(req.body.term) {
                        res.cookie("Email", req.body.Email, {maxAge: null})
                    }

                     return res.render ("profile", {usuario: req.session.usuarioLogeado})
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
        // res.session(noRepetirEmail)
        if(noRepetirEmail){
            return res.render ("registro", {
                errors:{
                    Email:{msg: "este Email ya esta registrado"}
                },
                oldData: req.body
            })
        }else {
            const crear = async function (req, res) {
                await  Usuario.create({
                    ...req.body,
                    password: bcryptjs.hashSync(body.password, 12),
                    
                })
                
            }
           
         return res.redirect ("login")
        }
        
    },
    //falta de aca para abaja
    editarUsuario: async function (req, res){
        const Usuario = await Usuario.findByPk({where: {id:req.params.id}});
        res.render("edicionUsuario", { Usuario });
    },
    
    modificarUsuario: async function (req, res){
        await Usuario.Update(req.body, req.file, {
            
                where: {
                  id: req.params.id,
                },
        })
        res.redirect ("/index")
    },
    
    eliminarUsuario: async function (req, res){
        await  Usuario(req.params.id);//completar
        res.redirect("/index");

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