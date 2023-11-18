import * as mongoDB from 'mongodb';
import { Collections, Token, TokenCollection, UserCollection } from '../types/collections';
import { User } from '../types/user';

const DEFAULT_DB_URI = '"mongodb://root:password@mongo:27017/';
const DEFAULT_DB_NAME = 'makerRpg';

export const collections: {
	users: UserCollection;
	tokens: TokenCollection;
	tokensBlacklist: TokenCollection;
} = {} as Collections;

export async function connectToDatabase () {
	const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING || DEFAULT_DB_URI);

	await client.connect();

	const db: mongoDB.Db = client.db(process.env.DB_NAME || DEFAULT_DB_NAME);

	const usersCollection = db.collection<User>('users');
	const tokensCollection = db.collection<Token>('tokens');
	const tokensBlacklistCollection = db.collection<Token>('tokensBlacklist');

	collections.users = usersCollection;
	collections.tokens = tokensCollection;
	collections.tokensBlacklist = tokensBlacklistCollection;

	console.log(`Successfully connected to database: ${db.databaseName} and collection: ${usersCollection.collectionName}`);
}
