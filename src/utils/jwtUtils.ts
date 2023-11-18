import { ObjectId } from 'mongodb';
import { PayloadUser } from '../types/payloadUser';
import jwt from 'jsonwebtoken';

type ValidateTokenResponse = {
  error: boolean;
  data: { payload: PayloadUser } | { message: string };
};

type UserGenerateToken = {
  id: ObjectId;
  name: string;
};

export const generateToken = (user: UserGenerateToken): string => {
	const payload = {
		payload: {
			id: user.id,
			name: user.name,
		},
	};

	return jwt.sign(payload, process.env.JWT_SECRET || 'secret');
};

export const validateToken = (token: string): ValidateTokenResponse => {
	try {
		const data = jwt.decode(token) as { payload: PayloadUser };

		return { error: false, data };
	} catch (e) {
		return { error: true, data: { message: 'Invalid token' } };
	}
};
