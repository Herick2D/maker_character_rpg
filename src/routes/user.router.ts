import { Router } from 'express';
import * as userController from '../controller/user.controller';

export const userRouter = Router();

userRouter.post('/', userController.createUser);
