const { DataTypes } = require('Sequelize');

module.exports = function (sequelize) {
    const usuarios_BD = sequelize.define('Usuario', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Nombre: {
            type: DataTypes.STRING,
        },
        Apellido: {
            type: DataTypes.STRING,
        },
        Direccion: {
            type: DataTypes.STRING,
        },
        Edad: {
            type: DataTypes.TINYINT,
        },
        Email: {
            type: DataTypes.STRING,
        },
        img: {
            type: DataTypes.STRING,
        },
        contraseña: {
            type: DataTypes.STRING,
        }

    },
    {
        tableName: 'usuarios',
        timestamps: false,
    });
        return usuarios_BD; 

        //associate


}