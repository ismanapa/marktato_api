const { addBookmarkMutation } = require('./bookmarksMutations');

module.exports = {
  Mutation: {
    addBookmark: addBookmarkMutation,
  },
};
