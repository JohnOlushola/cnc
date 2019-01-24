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

/* GET success page. */
router.get('/success', function (req, res) {
  res.render('success', { title: 'Code and Chill' });
});

/* GET home page. */
router.post('/register', userController.register);

module.exports = router;
