const { Bookmark } = require('../../models');

const getBookmarks = async (_, args) => {
  let bookmarks;
  if (typeof args.name !== 'undefined') {
    bookmarks = await Bookmark.find({ name: new RegExp(args.name, 'i') });
  } else {
    bookmarks = await Bookmark.find();
  }
  return bookmarks;
};


module.exports = {
  getBookmarks,
};
