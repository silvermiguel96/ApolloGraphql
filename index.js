const express = require('express');
// const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');

const resolvers = require('./resolvers/resolvers')
const mocks = require('./mocks.js')

const Profesor = require('./schema/Profesor')
const curso = require('././schema/Curso')
const rootQUery = require('./schema/schema.js');

require('./db/setup')

const server = new ApolloServer({
  typeDefs: [rootQUery, Profesor, curso],
  resolvers,
  // mocks,
  // La opcion false sirve para que los mocks por defecto cambien a el establecido
  // mockEntireSchema: false
})

const app = express();
server.applyMiddleware({
  app
})
const PORT = 4000;
app.listen(PORT, () => 
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);
