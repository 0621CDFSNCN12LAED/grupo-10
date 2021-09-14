const fs = require("fs");   
const path = require("path");
const functionService = require ("../services/functionService.js")

const indexController = {
    index: function (req, res) {
        res.render("index")

    },
    login:function (req, res) {
        res.render("login")
    },
    registro:function (req, res) {
        res.render("registro")
    },
  
};

module.exports = indexController;