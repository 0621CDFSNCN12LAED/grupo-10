const { DataTypes } = require('Sequelize');

module.exports = function(sequelize) {
    const carrito_productos_DB = sequelize.define('carrito_productos_DB', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        precio_total: {
            type: DataTypes.INTEGER,
        },
        carrito_de_compras_id: {
            type: DataTypes.INTEGER,
        }
    },
    {
        tableName: 'carrito_productos_DB',
        timestamp: false,
    });
    return carrito_productos_DB;
    //associate
}