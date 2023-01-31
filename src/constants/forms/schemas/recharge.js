import { LENGTH_PHONE_NUMBER } from '../../length';
import { RECHARGE_FORM_SCHEMA_PROVIDER_FIELD_NAME } from '../../schemas-names';

export const RECHARGE_FORM_SCHEMA = [
	{
		name: RECHARGE_FORM_SCHEMA_PROVIDER_FIELD_NAME,
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
		name: 'amount',
		required: true,
		label: 'Monto',
		placeholder: 'Ej. 5.000',
		keyboardType: 'number-pad',
		type: 'text',
	},
];
