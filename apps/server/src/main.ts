import { resolvers, typeDefs } from '@hackhouse/server/graphql';
import { connectDatabase } from '@hackhouse/server/mongodb';
import { ApolloServer } from 'apollo-server-express';
import express, { Application } from 'express';

const port = process.env.port || 3333;

const mount = async (app: Application) => {
  const db = await connectDatabase();

  app.use(express.json());

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ db }),
  });

  apolloServer.applyMiddleware({ app, path: '/api' });

  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });

  server.on('error', console.error);
};

mount(express());
