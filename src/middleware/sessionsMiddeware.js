function sessionGuest (req, res, next) {
    if (req.session.usuarioLogeado) {     
    };
    next();
};

module.exports = sessionGuest