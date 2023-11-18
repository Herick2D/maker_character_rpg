import { ZodError, ZodType } from 'zod';

export const schemaValidator = <T>(schema: ZodType<T>, data: T) => {
	try {
		schema.parse(data);
		return { error: false, errors: [] };
	} catch (error) {
		let errorArr: any[] = [];

		if (error instanceof ZodError) {
			errorArr = error.errors;
		}

		return { error: true, errors: errorArr };
	}
};
