const { Op } = require("sequelize");

const { Usuario } = require("../database/models");

const controllerUsuario = {
    lista: (req, res) => {
        db.Usuario.findAll({}).then((Usuario) => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: Usuario.length,
                    url: "api/users/",
                },
                data: Usuario,
            };
            res.json(respuesta);
        });
    },
};

module.exports = controllerUsuario;
