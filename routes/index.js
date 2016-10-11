var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/data', function(req, res, next) {
  res.render('data', { title: 'Data' });
});

/* GET home page. */
router.get('/nav', function(req, res, next) {
  res.render('nav', { title: 'Data' });
});

module.exports = router;
