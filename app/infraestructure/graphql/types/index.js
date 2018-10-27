const { gql } = require('apollo-server-express');

const bookmarkType = require('./bookmarkType');

const typeDefs = gql`
    ${bookmarkType.definition}

    scalar Date

    type Query {
        bookmarks: [${bookmarkType.name}]
    }

    type Mutation {
        addBookmark(
            name: String,
            description: String,
            url: String
        ): ${bookmarkType.name}
    }
`;

module.exports = typeDefs;
