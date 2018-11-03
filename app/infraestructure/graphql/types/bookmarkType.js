const typeName = 'Bookmark';

module.exports = {
  name: typeName,
  definition: `
          type ${typeName} {
              id: ID,
              name: String,
              description: String,
              usages: Int,
              lasUsage: Date,
              url: String
          }
      `,
};
