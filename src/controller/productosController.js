const productosController = {

listadoProductos : function (req, res) {
    res.render("productosMuebles", {
        productos: [
        { nombre: "sillon",
          desc: "Sillon de diseño. Tamaño: 3 cuerpos. Hecho en pana",
          precio: "$ 60.000",
          img: "/img/Sillon.jpg",
        },
        { nombre: "sillon individual",
          desc: "Sillon individual de diseño. Hecho en pana",
          precio: "$ 35.000",
          img: "/img/SillonIndividual.jpg",
        },
        { nombre: "Set de mesas ratonas",
          desc: "Set de dos mesas ratonas. Madera paraiso con tapa simil marmol blanco.",
          precio: "$ 20.000",
          img: "/img/mesaRatona.jpg",
        }
        ],
});
},
}

module.exports = productosController