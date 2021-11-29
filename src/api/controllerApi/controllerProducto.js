const { Op } = require("sequelize");

const { Producto } = require("../../database/models");

const controllerProducto = {
    lista: (req, res) => {
        Producto.findAll({}).then((Producto) => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: Producto.length,
                    url: "api/productos/",
                },
                data: Producto,
            };
            res.json(respuesta);
        });
    },

    idProducto: function (req, res) {
        Producto.findByPk(req.params.id)
        .then(function (producto){
            res.json({data:producto,
                meta:{
                    status: 200,
                    url: "api/productos/:id" + req.params.id,
                }
                   
              })
        })
     },

};

module.exports = controllerProducto;
