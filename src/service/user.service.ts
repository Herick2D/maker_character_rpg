import { UserServiceResponse } from '../types/userServiceResponse';
import { collections } from '../model/database.model';
import { schemaValidator } from '../utils/schemaValidator';
import { createUserSchema } from '../schemas/createUserSchema';
import { ObjectId } from 'mongodb';
import { generateToken } from '../utils/jwtUtils';

export const createUser = async (name: string, email: string, password: string): Promise<UserServiceResponse> => {
	const dataValidate = schemaValidator(createUserSchema, { name, email, password });
	
	if (dataValidate.error) {
		return { status: 'BAD_REQUEST', data: { message: dataValidate.errors } };
	}

	const userAlreadyExist = await collections.users.findOne({ email });
	
	if (userAlreadyExist) {
		return { status: 'CONFLICT', data: { message: 'User already exists' } };
	}
	
	const dataValues = await collections.users.insertOne({ name, email, password });
	const token = generateToken({ name, id: dataValues.insertedId });
	
	await collections.tokens.insertOne({ token, userId: dataValues.insertedId });

	return { status: 'SUCCESS', data: { token } };
};

export const deleteUser = async (id?: string, token?: string): Promise<UserServiceResponse> => {
	if (!id || !token) {
		return { status: 'BAD_REQUEST', data: { message: 'Token Invalid' } };
	}

	const userExists = await collections.users.findOne({ _id: new ObjectId(id) });

	if (!userExists) {
		return { status: 'NOT_FOUND', data: { message: 'User not found' } };
	}

	const objectId = new ObjectId(id);

	await collections.users.deleteOne({ _id: objectId });
	await collections.tokensBlacklist.insertOne({ userId: objectId, token });

	return { status: 'SUCCESS', data: { message: 'User deleted!' } };
};
