const  { Usuario } = require('../database/models')

async function  usuarioLogeado (req, res, next){
    res.locals.estaLogeado = false;
    
    if(req.cookies.Email){

    const EmailCookie = await Usuario.findOne({ where :{Email: req.cookies.Email}}) 
    if (EmailCookie){
        req.session.usuarioLogeado = EmailCookie;

    }}

     if(req.session.usuarioLogeado) {
        res.locals.estaLogeado = true;
        res.locals.usuarioLogeado = req.session.usuarioLogeado

    };


   
    next();
};

module.exports = usuarioLogeado;