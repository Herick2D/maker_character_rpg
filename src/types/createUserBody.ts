import { Request } from 'express';

export interface CustomRequest<T> extends Request {
  body: T;
}

export type CreateUserType = {
  name: string;
  email: string;
  password: string;
};