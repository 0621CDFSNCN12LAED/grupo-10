function sessionGuest (req, res, next) {
    if (req.session.usuarioLogeado) { 
        return res.redirect ('/index')
    };
    next();
};

module.exports = sessionGuest