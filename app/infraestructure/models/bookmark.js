const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const BookmarkSchema = new mongoose.Schema({
  name: String,
  description: String,
  usages: Number,
  lastUsage: Date,
  url: String,
});

BookmarkSchema.plugin(timestamps);

module.exports = mongoose.model('Bookmark', BookmarkSchema);
