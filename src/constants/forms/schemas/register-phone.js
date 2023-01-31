import { LENGTH_PHONE_NUMBER } from '../../length';

export const REGISTER_PHONE_FORM_SCHEMA = [
	{
		name: 'phone',
		required: true,
		label: 'Teléfono',
		placeholder: 'Ej. 3001234567',
		maxLength: LENGTH_PHONE_NUMBER,
		minLength: LENGTH_PHONE_NUMBER,
		keyboardType: 'number-pad',
		type: 'text',
		class: 'mt-10',
	},
];
