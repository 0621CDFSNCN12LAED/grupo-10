const express = require("express");
const app = express();
const path = require("path");
const productosRouter = require ("./routers/productosRouter");
const routerIndex = require ("./routers/routerIndex");
const methodOverride =  require('method-override');

app.use(express.urlencoded({extended:false}))

app.use(methodOverride('_method'))

app.use(express.static("../public"));
 
app.set("view engine", "ejs");

app.listen(3001, console.log("Servidor Funcionando"));


app.use("/", routerIndex);

app.use("/productos", productosRouter)
