export const PROFILE_ACCOUNT_FORM_SCHEMA = [
	{
		name: 'name',
		required: true,
		placeholder: 'Nombre',
		label: 'Nombre',
		class: 'mt-5',
	},

	{
		name: 'email',
		required: true,
		placeholder: 'Ej. jhondoe@mail.com',
		label: 'Correo electrónico',
		keyboardType: 'email-address',
		textContentType: 'emailAddress',
		autoCapitalize: 'none',
		autoCompleteType: 'email',
	},

	{
		name: 'birthday',
		type: 'date',
		required: true,
		placeholder: 'Fecha de nacimiento',
		label: 'Fecha de nacimiento',
	},
	{
		name: 'password',
		required: true,
		placeholder: 'Introduce tu contraseña',
		label: 'Contraseña',
		password: 'password',
	},
];
