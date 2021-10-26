const { DataTypes } = require('Sequelize');

module.exports = function(sequelize) {
    const productos_DB = sequelize.define('productos_DB', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
        },
        descripcion: {
            type: DataTypes.TEXT,
        },
        precio: {
            type: DataTypes.INTEGER,
        },
        categorias_productos_id: {
            type: DataTypes.INTEGER,
        }
    },
    {
        tableName: 'productos_DB',
        timestamp: false,
    });
    return productos_DB;
    //associate
}