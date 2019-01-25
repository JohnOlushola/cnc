var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/* GET home page. */
router.get('/', function (req, res) {
  var error = req.flash('error')[0];
  var success = req.flash('success')[0];
  res.render('index', {
    title: 'Code and Chill', 
    message: {
      error: error,
      success: success
    }
  });
});

/* GET home page. */
router.post('/register', userController.register);

/* GET login page. */
router.get('/login', userController.login_get);

/* GET home page. */
router.post('/login', userController.login_post);

router.get('/logout', userController.logout);

module.exports = router;
