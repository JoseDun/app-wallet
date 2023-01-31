import { FORM_ERROR_MESSAGES } from '../../constants/forms/messages/errors';

const errorMessage = (error) => FORM_ERROR_MESSAGES[error];

export const validateObjectBySchema = (values, schema = []) => {
	const errors = {};

	schema.forEach(({ name, required, minLength, max, pattern }) => {
		const value = values[name];

		if (required && !value && value !== 0) {
			errors[name] = errorMessage('required');
		}
		if (minLength && value && `${value}`.length < minLength) {
			const message = errorMessage('minlength');
			errors[name] = message.replace('{min}', minLength);
		}
		if (max && value && value > max) {
			const message = errorMessage('maxlength');
			errors[name] = message.replace('{max}', max);
		}
		if (pattern && !new RegExp(pattern).test(value)) {
			errors[name] = errorMessage('pattern');
		}
	});

	return errors;
};
