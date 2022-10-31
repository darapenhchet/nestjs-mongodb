import { Options } from '@nestjs/common';
import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb://localhost:27017/activity_feed_db', {
          dbName: 'activity_feed_db',
          user: 'root',
          pass: 'rootpassword'
        })

        // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled


  },
];
