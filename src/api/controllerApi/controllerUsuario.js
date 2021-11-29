const { Op } = require("sequelize");

const { Usuario } = require("../../database/models");

const controllerUsuario = {
    lista: (req, res) => {
        Usuario.findAll({}).then((Usuario) => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: Usuario.length,
                    url: "api/usuarios/",
                },
                data: Usuario,
            };
            res.json(respuesta);
        });
    },

    idUsers: function (req, res) {
        Usuario.findByPk(req.params.id)
        .then(function (usuario){
            res.json({data:usuario,
                meta:{
                    status: 200,
                    url: "api/usuarios/:id" + req.params.id,
                }
                   
              })
        })
     },
};

module.exports = controllerUsuario;
