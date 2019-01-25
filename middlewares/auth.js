const auth = {
    required: function (req, res, next) {
        if (!req.session.authenticated) {
            req.session.destUrl = req.originalUrl;
            return res.redirect(302, "/login");
        }
        else next()
    },
    optional: function (req, res, next) {
        //TODO: This is probably not needed but could be useful
        // in adding user-specific details to req.session object.
        next();
    }
}

module.exports = auth