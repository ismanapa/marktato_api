const typeName = 'Bookmark';

module.exports = {
  name: typeName,
  definition: `
          type ${typeName} {
              name: String,
              description: String,
          }
      `,
};
