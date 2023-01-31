export const getInitialFormState = (fields = []) => {
	const response = {};

	fields.forEach((field) => {
		response[field.name] = field.value || '';
	});

	return response;
};
