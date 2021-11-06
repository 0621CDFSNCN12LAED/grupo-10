const { DataTypes } = require('Sequelize');

module.exports = function(sequelize) {
    const carrito_productos = sequelize.define('carrito', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        precio_total: {
            type: DataTypes.INTEGER,
        },
        
    },
    {
        tableName: 'carritoProductos',
        timestamp: false,
    });
    return carrito_productos;
    //associate
}