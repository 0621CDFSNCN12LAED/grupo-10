function sessionGuest (req, res, next) {
    if (req.session.user) {
       
    };
    next();



};

module.exports = sessionGuest