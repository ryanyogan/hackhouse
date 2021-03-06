import { connectDatabase } from '@hackhouse/server/mongodb';
import { listings } from '@hackhouse/server/util-interfaces';

const seed = async () => {
  try {
    console.log(`[seed] : running...`);

    const db = await connectDatabase();

    for (const listing of listings) {
      await db.listings.insertOne(listing);
    }
  } catch (error) {
    throw new Error('failed to seed the database');
  }

  console.log(`[seed] : completed...`);

  process.exit(0);
};

seed();
