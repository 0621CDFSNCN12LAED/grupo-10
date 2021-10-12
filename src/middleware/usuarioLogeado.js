function usuarioLogeado (req, res, next){
    res.locals.estaLogeado = false;

    if(req.session && req.session.user) {
        res.locals.estaLogeado = true;
        res.locals.user = req.session.user

    };

    next();
};

module.exports = usuarioLogeado;