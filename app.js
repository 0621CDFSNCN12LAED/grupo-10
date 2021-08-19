const express = require("express");
const app = express();
const path = require("path");

app.listen(3001, console.log("Servidor Funcionando"));

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/Login", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/login.html"));
});

app.get("/Carrito", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/carrito.html"));
});

app.get("/Plantas", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/productosPlantas.html"));
});

app.get("/Iluminacion", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/productosIluminacion.html"));
});
app.get("/Muebles", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/productosMuebles.html"));
});

app.get("/Carrito", function (req, res) {
    res.sendFile(path.join(__dirname, "/views/carrito.html"));
});
app.get('/Iluminacion', function (req, res) {
    res.sendFile(path.join(__dirname,"/views/productosIluminacion.html"))
    })
app.get('/Muebles', function (req, res) {
    res.sendFile(path.join(__dirname,"/views/productosMuebles.html"))
    })
app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname,"/views/login.html"))
    })
app.get('/registro', function (req, res) {
    res.sendFile(path.join(__dirname,"/views/registro.html"))
    })
