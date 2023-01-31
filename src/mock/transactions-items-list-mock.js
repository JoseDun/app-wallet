import { TRANSACTIONS_TYPES } from '../constants/transactions';

export const items = [
	{
		date: '09/12/2015',
		type: TRANSACTIONS_TYPES.transactions.name,
		value: {
			amount: '20000',
			currency: { code: 'COP', name: 'Peso Colombiano' },
		},
		user: {
			name: 'John Doe',
			email: 'james@example.com',
		},
	},
	{
		date: '08/12/2015',
		type: TRANSACTIONS_TYPES.withdraw.name,
		value: {
			amount: '10000',
			currency: { code: 'COP', name: 'Peso Colombiano' },
		},
		user: {
			name: 'Lara Jean',
			email: 'larajean@example.com',
		},
	},
];
