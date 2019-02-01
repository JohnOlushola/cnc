var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');
var projectController = require('../controllers/projectController');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', {title: 'Code and Chill'});
});

/* GET register page. */
router.get('/register', function (req, res) {
  var error = req.flash('error')[0];
  var success = req.flash('success')[0];
  res.render('register', {
    title: 'Code and Chill', 
    message: {
      error: error,
      success: success
    }
  });
});

/* POST form data. */
router.post('/register', userController.register);

/* GET login page. */
router.get('/login', userController.login_get);

/* GET home page. */
router.post('/login', userController.login_post);

/* Logout. */
router.get('/logout', userController.logout);

/* GET update page. */
router.get('/update', userController.update_get);

/* POST update form data. */
router.post('/update', userController.update_post);

/* GET project board. */
router.get('/project', projectController.project_get);

/* POST project board's form data. */
router.post('/project/add', projectController.project_add);




/*
 DEV: GET home page. 
 */
// router.get('/success', function (req, res) {
//   res.render('success', {title: 'Code and Chill', update: false});
// });


module.exports = router;
