import * as mongoDB from 'mongodb';
import { Collections, UserCollection } from '../types/collections';
import { User } from '../types/user';

const DEFAULT_DB_URI = '"mongodb://root:password@mongo:27017/';
const DEFAULT_DB_NAME = 'makerRpg';

export const collections: { users: UserCollection } = {} as Collections;

export async function connectToDatabase () {
	const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING || DEFAULT_DB_URI);

	await client.connect();

	const db: mongoDB.Db = client.db(process.env.DB_NAME || DEFAULT_DB_NAME);

	const usersCollection = db.collection<User>('users');

	collections.users = usersCollection;

	console.log(`Successfully connected to database: ${db.databaseName} and collection: ${usersCollection.collectionName}`);
}