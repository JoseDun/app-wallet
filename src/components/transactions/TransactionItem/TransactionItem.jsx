import moment from 'moment';
import { Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import CoinAdvice from '../../common/CoinAdvice';

import { SHORT_DATE_FORMAT } from '../../../constants/date-formats';
import { ICON_SIZES } from '../../../constants/sizes';
import { COLORS } from '../../../constants/theme/colors';
import { TRANSACTIONS_TYPES } from '../../../constants/transactions';

export function TransactionItem({ data, ...props }) {
	const { user, type, date, value } = data;

	const date_parsed = moment(date).format(SHORT_DATE_FORMAT);

	const { color, icon } = TRANSACTIONS_TYPES[type];

	return (
		<View className="flex-row bg-light rounded-lg p-3" {...props}>
			<View
				className="mr-5 items-center justify-center rounded-md w-14 h-14"
				style={{ backgroundColor: color }}
			>
				<Icon name={icon} size={ICON_SIZES.MEDIUM} color={COLORS.light} />
			</View>
			<View className="w-9/12 justify-between flex-row items-center">
				<View>
					<Text className="font-bold">{user?.name || user?.email || 'Desconocido'}</Text>
					<Text>{date_parsed}</Text>
				</View>
				<CoinAdvice amount={value?.amount} color={color} />
			</View>
		</View>
	);
}
