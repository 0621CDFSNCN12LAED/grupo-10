const functionUser = require ("../services/functionUser")

function usuarioLogeado (req, res, next){
    res.locals.estaLogeado = false;

    const cookieEsEmail = req.body.userEmail;
    const buscarEmailCookie = functionUser.buscarCampoEspecifico("Email", cookieEsEmail);

    if(buscarEmailCookie){
        req.session.user = buscarEmailCookie;
    }


    if(req.session && req.session.user) {
        res.locals.estaLogeado = true;
        res.locals.user = req.session.user

    };

    next();
};

module.exports = usuarioLogeado;