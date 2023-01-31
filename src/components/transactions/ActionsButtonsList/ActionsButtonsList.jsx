import { View } from 'react-native';
import React from 'react';

import ActionsButton from '../ActionButton';

import { TRANSACTIONS_TYPES } from '../../../constants/transactions';

export function ActionsButtonsList({ ...props }) {
	return (
		<View className="flex-row justify-between" {...props}>
			{Object.keys(TRANSACTIONS_TYPES).map((key) => (
				<ActionsButton key={key} {...TRANSACTIONS_TYPES[key]} />
			))}
		</View>
	);
}
