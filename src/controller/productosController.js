const productosController = {

listadoMuebles : function (req, res) {
    res.render("productosMuebles", {
        muebles: [
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
listadoPlantas: function (req, res) {
    res.render("productosPlantas", {
        plantas: [
        { nombre: "MACETERO HIERRO + PLANTA",
          desc: "Sillon de diseño. TaMacetero de hierro, medida: 60 cm alto. Planta: Helecho.",
          precio: "$ 3.000",
          img: "/img/planta1.jpeg",
        },
        { nombre: "MACETEROS MINI + PLANTAS",
          desc: "Macetero de hierro, medida: 30 cm de alto. Planta: Secuculentas.",
          precio: "$ 4.000",
          img: "/img/planta2.jpeg",
        },
        { nombre: "SET MACETEROS DE ESCRITORIO",
          desc: "Set de tres maceteros de escritorio. Viene con suculentas a eleccion.",
          precio: "$ 4.000",
          img: "/img/suculenta1.jpeg",
        },
        { nombre: "MACETERO DE ESCRITORIO",
          desc: "Macetero individual de escritorio. Viene con suculenta a eleccion.",
          precio: "$ 1.500",
          img: "/img/seculenta2.jpeg",
        }
        ],
});
},
listadoIluminacion: function (req, res) {
    res.render("productosIluminacion", {
        luminaria: [
        { nombre: "Velador Mimbre",
          desc: " Velador de mimbre color arena. Conexion cableado para tomacorriente. Enchufe de dos patas - Medidas: 30 cm ancho por 50 cm alto. - Observaciones: El producto viene sin lampara.",
          precio: "$ 3.000",
          img: "/img/veladorMimbre.jpeg",
        },
        { nombre: "Lampara de Mimbre",
          desc: "Lampara de mimbre color arena. Conexion cableado para tomacorriente. - Medidas: 30 cm ancho por 50 cm alto. - Medidas: 30 cm ancho por 50 cm alto.",
          precio: "$ 4.500",
          img: "/img/lamparamimbre.jpeg",
        },
        { nombre: "Velador de Hierro",
          desc: "Velador de hierro en color negro. Conexion cableado para tomacorriente. Enchufe de dos patas - Medidas: 30 cm ancho por 50 cm alto. - Observaciones: El producto viene sin lampara.",
          precio: "$ 3.000",
          img: "/img/veladorhierro.jpeg",
        },
        { nombre: "Lampara de Hierro",
          desc: "Lampara de hierro color negro. Conexion cableado para tomacorriente. -  Medidas: 30 cm ancho por 50 cm alto. - Observaciones: El producto viene sin lampara. ",
          precio: "$ 4.500",
          img: "/img/LamparaHierro.jpg",
        }
        ],
});
},


}

module.exports = productosController