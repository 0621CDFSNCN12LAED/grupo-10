const { DataTypes } = require('Sequelize');

module.exports = function (sequelize) {
    const usuarios_BD = sequelize.define('usuarios_BD', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
        },
        apellidus: {
            type: DataTypes.STRING,
        },
        direccion: {
            type: DataTypes.STRING,
        },
        edad: {
            type: DataTypes.TINYINT,
        },
        email: {
            type: DataTypes.STRING,
        },
        categoria_usuario_id :{
            type: DataTypes.INTEGER,
        }
    },
    {
        tableName: 'usuarios_BD',
        timestamp: false,
    });
        return usuarios_BD; 

        //associate


}