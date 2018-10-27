const { Bookmark } = require('../../models');

const getBookmarks = async () => {
  const bookmarks = await Bookmark.find();
  return bookmarks;
};


module.exports = {
  getBookmarks,
};
