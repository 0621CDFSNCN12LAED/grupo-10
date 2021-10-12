function sessionGuest (req, res, next) {
    if (req.session.user) {
        return res.redirect ("/index")
    };
    next();



};

module.exports = sessionGuest