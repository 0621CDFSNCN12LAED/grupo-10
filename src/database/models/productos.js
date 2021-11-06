const { DataTypes } = require("Sequelize");

module.exports = function(sequelize) {
    const productos_DB = sequelize.define('Producto', {
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
        img: {
            type: DataTypes.STRING,
        },
        categorias: {
            type: DataTypes.STRING,
        },
       
    },
    {
        tableName: 'productos',
        timestamps: false
    },
    
    );
   
    return productos_DB;
    
}