var User = require('../models/user');

exports.register = function (req, res, next) {
    if (req.body.email) {
        var userData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            course: req.body.course,
            aoi: req.body.aoi,
            level: req.body.level
        }

        var email = req.body.email;
        if (User.findOne({ email }, function (err, user) {
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
                User.create(userData, function (err, user) {
                    if (err) {
                        return next(err)
                    } else {
                        res.render('success', {title: 'Code and Chill', name: user.firstName});
                    }
                });
            }
        }));
    } else {
        req.flash('Error', 'Please fill the form');
        return res.redirect('/');
    }
}