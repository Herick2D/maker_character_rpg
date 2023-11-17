import { Collection } from 'mongodb';
import { User } from './user';

export interface UserCollection extends Collection<User> {}

export interface Collections {
  users: UserCollection;
}
