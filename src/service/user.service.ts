import { UserServiceResponse } from '../types/userServiceResponse';
import { collections } from '../model/database.model';

export const createUser = async (name: string, email: string, password: string): Promise<UserServiceResponse> => {
	// TODO: Implement validation

	await collections.users.insertOne({ name, email, password });
  
	return { status: 'SUCCESS', data: { message: 'test' } };
};
