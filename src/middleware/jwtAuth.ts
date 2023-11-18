import { Response, NextFunction, Request } from 'express';
import { validateToken } from '../utils/jwtUtils';
import { collections } from '../model/database.model';

export const jwtValidateMiddleware = async (req: Request, res: Response, next: NextFunction) => {
	const { authorization } = req.headers;

	if (!authorization) {
		return res.status(401).json({ message: 'Token not found' });
	}

	const authorizationWithoutBearer = authorization.split(' ')[1] || authorization;

	const validateObj = validateToken(authorizationWithoutBearer);

	if (validateObj.error) {
		return res.status(401).json(validateObj.data);
	}

	if ('message' in validateObj.data) {
		return res.status(401).json(validateObj.data);
	}

	Object.defineProperty(req, 'user', { value: validateObj.data.payload });
	Object.defineProperty(req, 'token', { value: authorizationWithoutBearer });

	const tokenInBlackList = await collections.tokensBlacklist.findOne({
		token: authorizationWithoutBearer
	});

	if (tokenInBlackList) {
		return res.status(401).json({ message: 'Token invalid' });
	}

	next();
};