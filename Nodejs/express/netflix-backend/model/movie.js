const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  poster: { type: String, required: true },
  imdb_score: { type: Number, required: true },
  released_year: { type: Date, required: true },
  duration: { type: String, required: true },
  view_count: { type: Number, required: true },
  trailer: { type: String, required: true },
  category: [{ type: String }],
  country: [{ type: String }],
  language: [{ type: String }],
  director: [{ type: String }],
  cast: [
    {
      name: { type: String },
      character: { type: String }
    }
  ]
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;