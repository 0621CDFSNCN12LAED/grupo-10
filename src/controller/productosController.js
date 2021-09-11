const productosController = {

listadoMuebles : function (req, res) {
    res.render("productosMuebles")},


listadoPlantas: function (req, res) {
    res.render("productosPlantas")},
    

listadoIluminacion: function (req, res) {
    res.render("productosIluminacion")},


}

module.exports = productosController