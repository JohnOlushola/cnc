var User = require('../models/user');

exports.register = (req, res, next) => {
    if (req.body.email) {
        var userData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            course: req.body.course,
            phone: req.body.phone,
            aoi: req.body.aoi,
            level: req.body.level
        }

        var email = req.body.email;
        if (User.findOne({ email }, (err, user) => {
            if (err) {
                req.flash('error', 'An error occured. Please try again');
                return err
            };
            // check to see if theres already a user with that email
            if (user) {
                req.flash('error', 'Email already in use');
                res.redirect('/');
            }
            else {
                User.create(userData, (err, user) => {
                    if (err) {
                        return next(err)
                    } else {
                        res.render('success', { title: 'Code and Chill', name: user.firstName });
                    }
                });
            }
        }));
    } else {
        req.flash('Error', 'Please fill the form');
        return res.redirect('/');
    }
}

exports.login_get = (req, res) => {
    var error = req.flash('error')[0];
    res.render('login', {
        title: 'Login', 
        message: {
            error: error
        }
    });
}

exports.login_post = (req, res) => {
    var destUrl = req.session.destUrl;
    if (req.body.email && req.body.password) {
        User.findOne({ email: req.body.email }, function (err, user) {
            if (err) {
                return next(err)
            }
            req.session.regenerate(function (err) {
                if (err) {
                    return next(err)
                } else if (user) {
                    if (!user.validatePassword(req.body.password)) {
                        req.flash('error', 'Wrong password');
                        req.flash('email', req.body.email);
                        req.flash('authFailedPass', true);
                        return res.redirect(302, "/login");
                    }

                    req.session.authenticated = true;

                    res.redirect(302, destUrl || '/');
                } else {
                    req.flash('error', 'Incorrect email/password combination');
                    req.flash('authFailedPass', true);
                    req.flash('authFailedEmail', true);
                    res.redirect(302, "/login");
                }
            })
        })
    } else {
        next(Error("Incomplete request parameters"));
    }
}

exports.logout = function (req, res) {
    req.session.destroy(function (err) {
        if (err) {
            return next(err)
        }

        res.redirect(302, "/")
    })
}