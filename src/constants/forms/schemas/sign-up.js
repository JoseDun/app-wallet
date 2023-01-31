import { EMAIL_PATTERN } from '../../regexs';

export const SIGN_UP_FORM_SCHEMA = [
	{
		name: 'name',
		required: true,
		placeholder: 'Introduce tu nombre',
		label: 'Nombre',
		class: 'mt-5',
		autoCapitalize: 'none',
		autoFocus: true,
	},
	{
		name: 'lastname',
		required: true,
		placeholder: 'Introduce tu apellido',
		label: 'Apellido',
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
		autoCorrect: false,
		letterCase: 'lowercase',
		pattern: EMAIL_PATTERN,
	},
	{
		name: 'identity',
		required: true,
		placeholder: 'Ingresa el número del documento',
		label: 'Número del documento',
		keyboardType: 'number-pad',
	},
	{
		name: 'document_type',
		type: 'select',
		required: true,
		placeholder: 'Seleccionar documento',
		label: 'Tipo del documento',
		options: [
			{
				value: 'Cédula de Ciudadanía',
				_id: 'CC',
			},
			{
				value: 'Cédula de Extrangería',
				_id: 'CE',
			},
		],
	},
	{
		name: 'expedition',
		type: 'date',
		required: true,
		placeholder: 'Fecha de expedición del documento',
		label: 'Fecha de expedición',
	},
];
