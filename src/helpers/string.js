export const capitalize = (value) => {
	if (typeof value !== 'string') return '';

	const stringLowerCase = value.toLowerCase();
	return stringLowerCase.charAt(0).toUpperCase() + stringLowerCase.slice(1);
};
