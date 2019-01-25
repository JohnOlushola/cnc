var express = require('express');
var router = express.Router();
var dashboardController = require('../controllers/dashboardController');

router.get('/', dashboardController.list_registered);

router.post('/', dashboardController.search);

module.exports = router;