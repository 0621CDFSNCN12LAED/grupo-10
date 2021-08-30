const express = require("express");
const app = express();
const path = require("path");
const productosController = require("./controller/productosController");
const routerIndex = require("./controller/indexController");
const carritoController = require("./controller/carritoController");

app.set("view engine", "ejs");

app.listen(3001, console.log("Servidor Funcionando"));

app.use(express.static(path.join(__dirname, "../public")));

app.use("/", routerIndex.index);

app.get("/Login", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/login.html"));
});

app.get("/registro", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/registro.html"));
});

app.use("/Carrito", carritoController.carrito);

app.get("/Plantas", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/productosPlantas.html"));
});

app.get("/Iluminacion", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/productosIluminacion.html"));
});
app.use("/Muebles", productosController.listadoProductos);
