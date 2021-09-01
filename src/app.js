const express = require("express");
const app = express();
const path = require("path");
const productosController = require("./controller/productosController");
const routerIndex = require("./controller/indexController");
const routerCarrito = require("./controller/carritoController");

app.set("view engine", "ejs");

app.listen(3001, console.log("Servidor Funcionando"));

app.use(express.static("../public"));

app.use("/index", routerIndex.index);

app.get("/Login", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/login.html"));
});
 
app.get("/registro", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/registro.html"));
});

app.use("/Carrito", routerCarrito.carrito);

app.use("/Plantas", productosController.listadoPlantas);

app.use("/Iluminacion", productosController.listadoIluminacion);

app.use("/Muebles", productosController.listadoMuebles);
