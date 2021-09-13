const functionService = require ("../services/functionService.js")

const indexController = {
    index: function (req, res) {
        res.render("index.ejs")

    },
    demoDecoracion: function (req, res) {
        res.render("demoDecoracion.ejs")

    },
};

module.exports = indexController;