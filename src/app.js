const express = require("express");
const app = express();
const path = require("path");
const productosController = require("./controller/productosController");
const routerIndex = require("./controller/indexController");
const routerCarrito = require("./controller/carritoController");
const routerForms = require("./controller/formsController")

app.set("view engine", "ejs");

app.listen(3001, console.log("Servidor Funcionando"));

app.use(express.static("../public"));

app.use("/index", routerIndex.index);

app.get("/login", routerForms.login);
 
app.get("/registro", routerForms.registro);

app.get("/nuevo-producto", routerForms.nuevoProducto);

app.get("/editar-producto", routerForms.edicionProductos);

app.use("/Carrito", routerCarrito.carrito);

app.use("/Plantas", productosController.listadoPlantas);

app.use("/Iluminacion", productosController.listadoIluminacion);

app.use("/Muebles", productosController.listadoMuebles);
