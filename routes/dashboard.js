var express = require('express');
var router = express.Router();
var dashboardController = require('../controllers/dashboardController');

router.get('/', dashboardController.list_registered);

module.exports = router;