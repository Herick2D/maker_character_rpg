export const codes = {
	'SUCCESS': 200,
	'BAD_REQUEST': 400,
	'UNAUTHORIZED': 401,
	'FORBIDDEN': 403,
	'NOT_FOUND': 404,
	'INTERNAL_SERVER_ERROR': 500,
	'SERVICE_UNAVAILABLE': 503,
	'CONFLICT': 409,
};

export const mapHttpStatusCode = (code: keyof typeof codes) => codes[code] || 500;
