const { gql } = require('apollo-server-express');

const bookType = require('./bookType');
const editorialType = require('./editorialType');

const typeDefs = gql`
    ${bookType.definition}
    ${editorialType.definition}

    type Query {
        books (
            first: Int
        ): [${bookType.name}]
        editorials: [${editorialType.name}]
    }
`;

module.exports = typeDefs;