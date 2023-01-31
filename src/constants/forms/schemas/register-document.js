export const REGISTER_DOCUMENT_FORM_SCHEMA = [
	{
		name: 'frontside',
		required: true,
		label: 'Parte frontal',
		type: 'image',
		class: 'mt-10',
		canPick: false,
	},
	{
		name: 'backside',
		required: true,
		label: 'Parte trasera',
		type: 'image',
		canPick: false,
	},
];
