import { Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import Empty from '../../common/Empty';
import TransactionItem from '../TransactionItem';

import { COLORS } from '../../../constants/theme/colors';
import { items } from '../../../mock/transactions-items-list-mock';

export function TransactionsItemsList({ title = 'Transacciones', ...props }) {
	return (
		<View {...props}>
			{!!items?.length && (
				<>
					<View className="flex-row justify-between mx-3 items-center">
						<Text className="justify-center items-center text-xl text-black">
							{title}
						</Text>
						<Text className="text-white text-center font-bold">
							<Icon name="arrow-right" size={20} color={COLORS.dark} />
						</Text>
					</View>
					{items.map((item) => (
						<TransactionItem key={item.date} data={item} className="mt-3" />
					))}
				</>
			)}
			{!items?.length && <Empty className="mt-5 p-5" />}
		</View>
	);
}
