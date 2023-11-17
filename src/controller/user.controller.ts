import { CreateUserType, CustomRequest } from '../types/createUserBody';

export const createUser = async (req: CustomRequest<CreateUserType>, res: Response) => {
	const { name, email, password } = req.body;
	const serviceResponse = await userService.createUser({ name, email, password });
	// @ts-ignore - Property 'code' does not exist on type 'Response'.
	return res.status(serviceResponse.code).json(serviceResponse.data);
};