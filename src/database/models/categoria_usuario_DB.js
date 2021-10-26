const { DataTypes } = require('Sequelize');

module.exports = function(sequelize) {
    const categoria_usuario_DB = sequelize.define('categoria_usuario_DB', {
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
        tableName: 'categoria_usuario_DB',
        timestamp: false,
    });
    return categoria_usuario_DB;
    //associate
}