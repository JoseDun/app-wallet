import { LENGTH_PHONE_NUMBER } from '../../length';
import { PACKAGE_FORM_SCHEMA_PROVIDER_FIELD_NAME } from '../../schemas-names';

export const PACKAGE_FORM_SCHEMA = [
	{
		name: PACKAGE_FORM_SCHEMA_PROVIDER_FIELD_NAME,
		type: 'picker',
		options: [],
	},
	{
		name: 'phone',
		required: true,
		label: 'Teléfono',
		placeholder: 'Ej. 3001234567',
		maxLength: LENGTH_PHONE_NUMBER,
		minLength: LENGTH_PHONE_NUMBER,
		keyboardType: 'number-pad',
		type: 'text',
	},
	{
		name: 'package',
		type: 'select',
		required: true,
		placeholder: 'Selecciona uno',
		label: 'Paquete',
		options: [
			{
				value: '5.000 COP',
				_id: 5000,
			},
			{
				value: '8.000 COP',
				_id: 8000,
			},
		],
	},
];
