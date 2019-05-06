const express = require('express');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./schema.js');


const server = new ApolloServer({
  typeDefs
})
const app = express();
server.applyMiddleware({
  app
})
const PORT = 4000;
app.listen(PORT, () => 
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);
