const { Bookmark } = require('../../models');

const addBookmarkMutation = async (parent, args) => {
  const newBookmark = new Bookmark({
    ...args,
    usages: 0,
    lastUsage: null,
  });
  await newBookmark.save();
  return newBookmark;
};


module.exports = {
  addBookmarkMutation,
};
