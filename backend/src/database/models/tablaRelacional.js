const { DataTypes } = require('Sequelize');

module.exports = function(sequelize) {
    const carrito_de_compras = sequelize.define('Compras', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        usuario_id: {
            type: DataTypes.TINYINT,
        },
        productos_id: {
            type: DataTypes.INTEGER,
        },
        carritoProductos_id: {
            type: DataTypes.INTEGER,
        },
        cantidad: {
            type: DataTypes.INTEGER,
        }
    },
    {
        tableName: 'tablaRelacional',
        timestamp: false,
    });
    return carrito_de_compras;
    //associate
}