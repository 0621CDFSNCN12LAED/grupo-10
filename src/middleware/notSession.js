function notSession (req, res, next) {
    if (!req.session.usuarioLogeado) {
        return res.redirect ("/registro")
    };
    next();

};

module.exports = notSession