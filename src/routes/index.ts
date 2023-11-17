import { Router } from 'express';
import { userRouter } from './user.router';

export const mainRouter = Router();

mainRouter.use('/user', userRouter);
