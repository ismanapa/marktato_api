const editorialType = require('./editorialType');

module.exports = {
  name: 'Book',
  definition: `
      type Book {
          title: String
          author: String,
          editorial: ${editorialType.name}
      }
  `,
};
