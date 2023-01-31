export const SIGN_IN_FORM_SCHEMA = [
	{
		name: 'phone',
		required: true,
		placeholder: 'Ej. 3001234567',
		label: 'Teléfono',
	},
	{
		name: 'password',
		required: true,
		placeholder: 'Ingresa tu contraseña.',
		label: 'Contraseña',
		secureTextEntry: true,
	},
];
