const { DataTypes } = require('Sequelize');

module.exports = function(sequelize) {
    const categoria_productos_DB = sequelize.define('categoria_productos_DB', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        categoria: {
            type: DataTypes.STRING
        }
    },
    {
        tableName: 'categoria_productos_DB',
        timestamp: false,
    });
    return categoria_productos_DB;
    //associate
}