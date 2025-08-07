const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  name: String,
  Comment: String,
  rating: Number,
});


module.exports = mongoose.model('Feedback', FeedbackSchema);
