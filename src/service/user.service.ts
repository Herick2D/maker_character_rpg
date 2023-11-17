import { UserServiceResponse } from '../types/userServiceResponse';
import { collections } from '../model/database.model';
import { schemaValidator } from '../utils/schemaValidator';
import { createUserSchema } from '../schemas/createUserSchema';

export const createUser = async (name: string, email: string, password: string): Promise<UserServiceResponse> => {
	const dataValidate = schemaValidator(createUserSchema, { name, email, password });
	
	if (dataValidate.error) {
		return { status: 'BAD_REQUEST', data: { message: dataValidate.errors } };
	}

	const userAlreadyExist = await collections.users.findOne({ email });

	if (userAlreadyExist) {
		return { status: 'CONFLICT', data: { message: 'User already exist' } };
	}

	const dataValues = await collections.users.insertOne({ name, email, password });
	return { status: 'SUCCESS', data: { id: dataValues.insertedId } };
};
