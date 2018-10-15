const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
    editorial: 1,
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
    editorial: 2,
  },
];

module.exports = {
  getBooks: (_, { first }) => {
    if (typeof first === 'undefined') {
      return books;
    }
    return books.slice(0, first);
  },
};