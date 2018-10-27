const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./types');
const queries = require('./queries');
const mutations = require('./mutations');

const resolvers = {
  ...queries,
  ...mutations,
};

const server = new ApolloServer({ typeDefs, resolvers });

module.exports = server;
