function notSession (req, res, next) {
    if (!req.session.user) {
        return res.redirect ("/registro")
    };
    next();



};

module.exports = notSession