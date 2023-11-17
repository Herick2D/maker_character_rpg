import { CreateUserType } from '../types/createUserBody';
import { Request, Response } from 'express';
import * as userService from '../service/user.service';
import { mapHttpStatusCode } from '../utils/mapHttpStatusCode';

export const createUser = async (req: Request<object, object, CreateUserType>, res: Response) => {
	const { name, email, password } = req.body;
	const serviceResponse = await userService.createUser(name, email, password);

	return res.status(mapHttpStatusCode(serviceResponse.status)).json(serviceResponse.data);
};
