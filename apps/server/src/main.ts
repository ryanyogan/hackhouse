import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { listings } from './app/fake-api/listings';

const app = express();

app.use(express.json());

app.get('/listings', (_req, res) => {
  res.send(listings);
});

app.post('/delete-listing', (req, res) => {
  const id: string = req.body.id;

  for (let i = 0; i < listings.length; i++) {
    if (listings[i].id === id) {
      return res.send(listings.splice(i, 1));
    }
  }

  return res.send('failed to delted listing');
});

const apolloServer = new ApolloServer();
apolloServer.applyMiddleware({ app, path: '/api' });

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

server.on('error', console.error);
