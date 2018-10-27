const { bookmark } = require('../../models');

const getBookmarks = async () => {
  const bookmarks = await bookmark.find();
  return bookmarks;
};


module.exports = {
  getBookmarks,
};
