const { getBooks } = require('./booksQueries');
const { getEditorial } = require('./editorialQueries');

module.exports = {
  Query: {
    books: getBooks,
    editorials: getEditorial,
  },
  Book: {
    editorial: () => {
      return {
        name: 'editorial',
      };
    },
  },
};
