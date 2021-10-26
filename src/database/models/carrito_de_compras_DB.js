const { DataTypes } = require('Sequelize');

module.exports = function(sequelize) {
    const carrito_de_compras_DB = sequelize.define('carrito_de_compras_DB', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cantidad: {
            type: DataTypes.TINYINT,
        },
        precio: {
            type: DataTypes.INTEGER,
        },
        usuario_id: {
            type: DataTypes.INTEGER,
        },
        productos_id: {
            type: DataTypes.INTEGER,
        }
    },
    {
        tableName: 'carrito_de_compras_DB',
        timestamp: false,
    });
    return carrito_de_compras_DB;
    //associate
}