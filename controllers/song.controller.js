const Song = require("../models/song.model");

//Simple version, without validation or sanitation
exports.create = function(req, res) {
  let song = new Song({
    title: req.body.title,
    artist: req.body.artist,
    tuning: req.body.tuning,
    link: req.body.link,
    rating: req.body.rating
  });

  song.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("Song Created!");
  });
};

exports.song_list = function(req, res) {
  Song.find(req.params.id, function(err, songs) {
    if (err) return next(err);
    res.send(songs);
  });
};

exports.song_details = function(req, res) {
  Song.findById(req.params.id, function(err, song) {
    if (err) return next(err);
    res.send(song);
  });
};

exports.song_update = function(req, res) {
  Song.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    song
  ) {
    if (err) return next(err);
    res.send("song udpated.");
  });
};

exports.song_delete = function(req, res) {
  Song.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send("Deleted successfully!");
  });
};

exports.test = function(req, res) {
  res.send("Greetings from the Test controller!");
};
