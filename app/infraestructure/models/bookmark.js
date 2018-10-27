const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamps');

const BookmarkSchema = new mongoose.Schema({
  name: String,
  description: String,
  Usages: Number,
  LastUsage: Date,
  Url: String,
});

BookmarkSchema.plugin(timestamps);

module.exports = mongoose.model('Bookmark', BookmarkSchema);
