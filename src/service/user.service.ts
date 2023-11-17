import { UserServiceResponse } from '../types/UserServiceResponse';

export const createUser = async (name, email, password): Promise<UserServiceResponse> => {
	// TODO: Implement validation
	// TODO: Implement Database Mongodb
  
	return { status: '', data: { message: 'test' } };
};
