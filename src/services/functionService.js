const fs = require("fs");   
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productosDatos.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const userFilePath = path.join(__dirname, "../data/usuariosDatos.json");
const user = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

const functionService = {
    filtrarMuebles(){
        const filtrarProductos = products.filter(function(productoIndividual)
            {
            return productoIndividual.category == "muebles"
        });
        return filtrarProductos
    },
    
    filtrarIluminacion(){
        const filtrarProductos = products.filter(function(productoIndividual)
            {
            return productoIndividual.category == "iluminacion"
        });
        return filtrarProductos
    },

    filtrarPlantas(){
        const filtrarProductos = products.filter(function(productoIndividual)
            {
            return productoIndividual.category == "plantas"
        });
        return filtrarProductos
    },

    buscarProductoid(id){   //preguntar por que va id ahi en la funcion
        const buscarProducto = products.find(function(productoIndividual){
            return productoIndividual.id == id;
        });
        return buscarProducto
    },


};

module.exports = functionService;

