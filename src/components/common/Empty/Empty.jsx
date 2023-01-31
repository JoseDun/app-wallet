import { Text, View, Image } from 'react-native';

export function Empty({ title = '¡Aun no hay transacciones!', ...props }) {
	return (
		<View {...props}>
			<Text className="text-center text-3xl">{title}</Text>
			<View>
				<Image
					source={require('../../../assets/images/no-transactions.png')}
					className="self-end"
				/>
			</View>
		</View>
	);
}
