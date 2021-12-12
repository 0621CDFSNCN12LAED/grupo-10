const { Op } = require("sequelize");

const { Usuario } = require("../../database/models");

const controllerUsuario = {
    lista: (req, res) => {
        Usuario.findAll({}).then((Usuarios) => {
            const nuevoUsuario = Usuarios.map((usuario)=>{
                return {
                    Nombre: usuario.Nombre,
                    Apellido: usuario.Apellido,
                    Direccion: usuario.Direccion,
                    Edad: usuario.Edad,
                    Email: usuario.Email,
                    img: usuario.img,
                }
            })
            let respuesta = {
                
                meta: {
                    status: 200,
                    total: Usuarios.length,
                    url: "api/usuarios/",
                },
                data: nuevoUsuario, 
                
            };
            res.json(respuesta);
        });
    },

    idUsers: function (req, res) {
        Usuario.findByPk(req.params.id)
        .then(function (usuario){
            res.json({
                data:usuario,
                meta:{
                    status: 200,
                    url: "api/usuarios/:id" + req.params.id,
                }
                   
              })
        })
     },
};

module.exports = controllerUsuario;
