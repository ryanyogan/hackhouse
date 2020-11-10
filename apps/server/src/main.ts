import { resolvers, typeDefs } from '@hackhouse/server/graphql';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';

const app = express();

app.use(express.json());

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});
apolloServer.applyMiddleware({ app, path: '/api' });

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

server.on('error', console.error);
