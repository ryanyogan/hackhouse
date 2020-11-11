import { Database } from '@hackhouse/server/util-interfaces';
import { MongoClient } from 'mongodb';

const url = `mongodb+srv://ryan:hummer@tinyhouse.lgr1o.mongodb.net/<dbname>?retryWrites=true&w=majority`;

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db('main');

  return {
    listings: db.collection('listings'),
  };
};
