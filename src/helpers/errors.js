import { RESPONSE_ERRORS } from '../constants/errors';

export const transformErrorMessage = (errorKey) => {
	const message = RESPONSE_ERRORS[errorKey];

	return message || RESPONSE_ERRORS.common;
};
