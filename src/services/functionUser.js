const fs = require("fs");
const path = require("path");

const userFilePath = path.join(__dirname, "../data/usuariosDatos.json");
const users = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

const bcryptjs = require ("bcryptjs");

const functionUser = {

    
    buscarCampoEspecifico: function(Email) {
        const buscarEmail = users.find(function (user) {
            return user.Email == Email;
        });
        return buscarEmail;
        
    },
    
    buscarUserid(id) {
        const buscarUser = users.find(function (user) {
            return user.id == id;
        });
        return buscarUser;
        
    },
    crearUsuario(datosUsuarios, file) {
        const lastUser = users[users.length - 1];
        const biggestUserId = users.length > 0 ? lastUser.id : 1;
        const user = {
            id: biggestUserId + 1,
            ...datosUsuarios,
            img: file ? file.filename : "default-image.png",
            contraseña: bcryptjs.hashSync(datosUsuarios.contraseña, 10),
            repetirContraseña: bcryptjs.hashSync(datosUsuarios.repetirContraseña, 10), 
        
        };
        
        users.push(user);
        functionUser.guardarJson();

    },

    modificarUsuario(id, cargar, img) {
        const user = functionUser.buscarUserid(id);
        user.Nombre = cargar.Nombre;
        user.Apellido = cargar.Apellido;
        user.Dirección = cargar.Dirección;
        user.Edad = cargar.Edad;
        user.Email = cargar.Email
        user.category = cargar.category
        user.img =  img ? img.filename : user.img;
        user.contraseña = cargar.contraseña
        user.repetirContraseña = cargar.repetirContraseña
        
        functionUser.guardarJson();
    },

    eliminar(id) {
    const user = functionUser.buscarUserid(id);
    const index = users.indexOf(user)
        users.splice (index , 1);

        if (user.img){
        fs.unlinkSync(path.join(__dirname, "../../public/img/" + user.img )) }

        functionUser.guardarJson();
        },

    guardarJson() {
        const jsonString = JSON.stringify(users, null, 4);
        fs.writeFileSync(userFilePath, jsonString);
    },

}

module.exports = functionUser;

