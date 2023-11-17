import { UserServiceResponse } from '../types/UserServiceResponse';

export const createUser = async (_name: string, _email: string, _password: string): Promise<UserServiceResponse> => {
	// TODO: Implement validation
	// TODO: Implement Database Mongodb
  
	return { status: 'SUCCESS', data: { message: 'test' } };
};
