import { MongoClient, Db } from 'mongodb';

const dbName = process.env.MONGODB_NAME as string;

export const mongoDBClient = new MongoClient(process.env.MONGODB_CONNECTION_STRING as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

export const _db_connect_promise = mongoDBClient
    .connect()
    .then((_) => mongoDBClient.db(dbName))
    .catch((e) => {
        console.log('db error');
        console.log(e);
    }) as Promise<Db>;
