const express = require("express");
const app = express();
const path = require("path");
const productosRouter = require("./routers/productosRouter");
const routerIndex = require("./routers/routerIndex");
const routerUsuario = require("./api/routerApi/routerUsuario");
const routerProducto = require("./api/routerApi/routerProducto");
const methodOverride = require("method-override");
const session = require("express-session");
const usuarioLogeado = require("./middleware/usuarioLogeado");
const cookie = require("cookie-parser");

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.use(
    session({
        secret: "Decoar",
        resave: false,
        saveUninitialized: false,
        // ver cuando van el false o true las propiedades resave y saveUninitialized
    })
);

app.use(cookie());
app.use(usuarioLogeado);

app.use(express.static(path.join(__dirname, "../public")));

app.set("views", path.resolve(__dirname, "./views"));

app.set("view engine", "ejs");

app.listen(3001, console.log("Servidor Funcionando"));

app.use("/", routerIndex);

app.use("/productos", productosRouter);

app.use("/api/productos", routerProducto);

app.use("/api/usuarios", routerUsuario);
