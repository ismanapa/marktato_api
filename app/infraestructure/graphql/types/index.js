const { gql } = require('apollo-server-express');

const bookmarkType = require('./bookmarkType');

const typeDefs = gql`
    ${bookmarkType.definition}

    type Query {
        bookmarks: [${bookmarkType.name}]
    }
`;

module.exports = typeDefs;
