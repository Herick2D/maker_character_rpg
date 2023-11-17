import { CreateUserType } from '../types/createUserBody';
import { Response } from 'express';
import * as userService from '../service/user.service';
import { CustomRequest } from '../types/CustomRequest';
import { mapHttpStatusCode } from '../utils/mapHttpStatusCode';

export const createUser = async (req: CustomRequest<CreateUserType>, res: Response) => {
	const { name, email, password } = req.body;
	const serviceResponse = await userService.createUser(name, email, password);

	return res.status(mapHttpStatusCode(serviceResponse.status)).json(serviceResponse.data);
};
