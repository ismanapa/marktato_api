const { getBookmarks } = require('./bookmarksQueries');

module.exports = {
  Query: {
    bookmarks: getBookmarks,
  },
};
