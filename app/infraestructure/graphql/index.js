const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./types');
const queries = require('./queries');

const resolvers = {
  ...queries,
};

const server = new ApolloServer({ typeDefs, resolvers });

module.exports = server;
