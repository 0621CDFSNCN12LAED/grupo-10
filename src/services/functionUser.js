const fs = require("fs");
const path = require("path");

const userFilePath = path.join(__dirname, "../data/usuariosDatos.json");
const users = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

const functionUser = {
    crearUsuario(datosUsuarios, img) {
        const lastUser = users[users.length - 1];
        const biggestUserId = users.length > 0 ? lastUser.id : 1;
        const user = {
            id: biggestUserId + 1,
            ...datosUsuarios,
            img: img ? img.filename : "default-image.png",
    
        };

        console.log(user)

        users.push(user);
        const jsonString = JSON.stringify(users, null, 4);
        fs.writeFileSync(userFilePath, jsonString);
    },

}

module.exports = functionUser;