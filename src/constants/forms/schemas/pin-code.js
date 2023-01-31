export const PIN_CODE_FORM_SCHEMA = [
	{
		name: 'pincode',
		required: true,
		type: 'pin',
		minLength: 4,
		class: 'mt-20',
	},
];

export const PIN_CODE_CONFIRM_FORM_SCHEMA = [
	{
		name: 'pincode_confirm',
		required: true,
		type: 'pin',
		minLength: 4,
		class: 'mt-20',
	},
];
