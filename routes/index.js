const express = require('express');
const song_controller = require('../controllers/song.controller')
const router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('songs', { title: 'SongBook' });
// });
router.get('/', song_controller.song_list);

router.get('/newSong', function(req, res, next) {
  res.render('addSong', { title: 'Add a Song' });
});
router.get('/editSong', function(req, res, next) {
  res.render('index', { title: 'Edit Song' });
});

module.exports = router;
