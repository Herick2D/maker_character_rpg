import { Router } from 'express';
import * as userController from '../controller/user.controller';
import { jwtValidateMiddleware } from '../middleware/jwtAuth';

export const userRouter = Router();

userRouter.post('/', userController.createUser);
userRouter.delete('/', jwtValidateMiddleware, userController.deleteUser);
