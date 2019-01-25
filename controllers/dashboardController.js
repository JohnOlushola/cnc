var User = require('../models/user');
var moment = require('moment');

exports.list_registered = function (req, res, next) {
    User.find({})
    .exec(function (err, registered) {
        if (err) { return next(err) }
        
        res.render('dashboard/index', {
            title: 'Dashboard',
            registered: registered,
        });
    });
}

exports.search = (req, res ) => {
    var email = req.body.email;
    User.find({"email": email})
    .exec( (err, registered) => {
        if (err) { return next(err) }

        res.render('dashboard/index', {
            title: 'Dashboard',
            registered: registered,
        });
    })
}