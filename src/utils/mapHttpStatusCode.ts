const codes = {
	'SUCCESS': 200,
	'BAD_REQUEST': 400,
	'UNAUTHORIZED': 401,
	'FORBIDDEN': 403,
	'NOT_FOUND': 404,
	'INTERNAL_SERVER_ERROR': 500,
	'SERVICE_UNAVAILABLE': 503,
};

export const mapHttpStatusCode = (code: string) => codes[code as keyof typeof codes] || 500;
