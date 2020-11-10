import express from 'express';
import { listings } from './app/fake-api/listings';

const app = express();

app.get('/listings', (_req, res) => {
  res.send(listings);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

server.on('error', console.error);
