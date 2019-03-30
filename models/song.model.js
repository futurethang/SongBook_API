const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Song = new Schema({
  title: { type: String, required: true, max: 100 },
  artist: { type: String, required: true, max: 100 },
  tuning: { type: String, required: true, max: 100 }, // set deault to standard
  link: { type: String },
  rating: { type: Number, required: true }
});

// Export the model
module.exports = mongoose.model("Song", Song);
