var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/newSong', function(req, res, next) {
  res.render('addSong', { title: 'Add a Song' });
});
router.get('/editSong', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
