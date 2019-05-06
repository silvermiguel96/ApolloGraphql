const express = require('express');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./schema');

const resolvers = {
  Query: {
      cursos: () => []
  }
}
const server = new ApolloServer({
  typeDefs,
  resolvers
})
const app = express();
server.applyMiddleware({
  app
})
const PORT = 5678;
app.listen(PORT, () => 
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);
