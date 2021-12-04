const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productosDatos.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));


const functionService = {
    filtrarMuebles() {
        const filtrarProductos = products.filter(function (productoIndividual) {
            return productoIndividual.category == "muebles";
        });
        return filtrarProductos;
    },

    filtrarIluminacion() {
        const filtrarProductos = products.filter(function (productoIndividual) {
            return productoIndividual.category == "iluminacion";
        });
        return filtrarProductos;
    },

    filtrarPlantas() {
        const filtrarProductos = products.filter(function (productoIndividual) {
            return productoIndividual.category == "plantas";
        });
        return filtrarProductos;
    },

    buscarProductoid(id) {
       
        const buscarProducto = products.find(function (productoIndividual) {
            return productoIndividual.id == id;
        });
        return buscarProducto;
        
    },

    crear(cargarPrecio, img) {
        const lastProduct = products[products.length - 1];
        const biggestProductId = products.length > 0 ? lastProduct.id : 1;
        const product = {
            id: biggestProductId + 1,
            ...cargarPrecio,
            precio: Number(cargarPrecio.precio),
            img: img ? img.filename : "default-image.png",
    
        };
        products.push(product);
        functionService.guardarJson();
    },

    modificar(id, cargar, img) {
        const product = functionService.buscarProductoid(id);
        product.nombre = cargar.nombre;
        product.desc = cargar.desc;
        product.category = cargar.category;
        product.precio = Number(cargar.precio);
        product.img =  img ? img.filename : product.img;

        
        functionService.guardarJson();
    },

    eliminar(id) {
        
        const product = functionService.buscarProductoid(id);
        const index = products.indexOf(product)
        products.splice (index , 1);

        if (product.img){
        fs.unlinkSync(path.join(__dirname, "../../public/" + product.img ))};
        functionService.guardarJson();
        },

    guardarJson() {
        const jsonString = JSON.stringify(products, null, 4);
        fs.writeFileSync(productsFilePath, jsonString);
    },
    
};

module.exports = functionService;
