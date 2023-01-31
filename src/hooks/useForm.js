import { useState } from 'react';
import { validateObjectBySchema } from '../helpers/forms/validate';

export const useForm = (initialState, callback, schema) => {
	const [values, setValues] = useState(initialState);
	const [errors, setErrors] = useState({});

	const onInputChange = (event) => {
		const { name, value } = event;
		let newValue = value;

		if (schema[name]?.letterCase === 'lowercase') {
			newValue = `${value}`.toLowerCase();
		}
		if (schema[name]?.letterCase === 'uppercase') {
			newValue = `${value}`.toUpperCase();
		}

		setErrors((currentValue) => ({ ...currentValue, [name]: '' }));
		setValues({
			...values,
			[name]: newValue,
		});
	};

	const reset = () => {
		setValues(initialState);
		setErrors({});
	};

	const setValue = (value) => {
		setValues(value);
	};

	const onSubmit = (e) => {
		if (e) e.preventDefault();
		const result = validateObjectBySchema(values, schema);
		if (!Object.keys(result).length) {
			setErrors({});
			callback(values);
		} else setErrors(result);
	};

	return {
		values,
		errors,
		onInputChange,
		reset,
		onSubmit,
		setValue,
		setErrors,
	};
};
