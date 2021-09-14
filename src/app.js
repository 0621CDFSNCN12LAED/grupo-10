const express = require("express");
const app = express();
const path = require("path");
const productosRouter = require ("./routers/productosRouter");
const routerIndex = require ("./routers/routerIndex");

app.set("view engine", "ejs");

app.listen(3001, console.log("Servidor Funcionando"));

app.use(express.static("../public"));

app.use("/", routerIndex);

app.use("/products", productosRouter)
