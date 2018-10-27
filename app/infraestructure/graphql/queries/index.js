const { getBookmarks } = require('./bookmarksQueries');

module.exports = {
  Query: {
    bookmarkts: getBookmarks,
  },
};
