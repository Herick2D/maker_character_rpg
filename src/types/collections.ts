import { Collection, ObjectId } from 'mongodb';
import { User } from './user';

export interface Token {
  token: string;
  userId: ObjectId;
}

export interface TokenCollection extends Collection<Token> {}
export interface UserCollection extends Collection<User> {}

export interface Collections {
  users: UserCollection;
  tokens: TokenCollection;
  tokensBlacklist: TokenCollection;
}
