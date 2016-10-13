var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Input' });
});

/* GET home page. */
router.get('/data', function(req, res, next) {
  res.render('data', { title: 'Data'});
});

router.get('/sort', function(req, res, next) {
  var db = req.db;
  var collection = db.get('userlist');
  var userlist = [];
  var ob = { action:"date", result:"1367263074"};
  console.log(ob);
  collection.find({}, {}, function (e, docs) {

            res.render('sort', { title: 'Data', 
					   json: docs   });

         });

});

router.get('/sort2', function(req, res, next) {
  res.render('sort2', { title: 'Data' 
						});
});

module.exports = router;
