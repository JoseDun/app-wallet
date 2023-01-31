import { View, Text, Pressable } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { COLORS } from '../../../constants/theme/colors';
import { SCREENS } from '../../../constants/screens';

export function ActionButton({ title, icon, color = COLORS.black, name }) {
	const navigation = useNavigation();

	const handlePress = () => {
		if (name === 'services') return navigation.navigate(SCREENS.SERVICES);
	};

	return (
		<Pressable className="flex-col" onPress={handlePress}>
			<View
				style={{ backgroundColor: color }}
				className="h-24 w-24 rounded-3xl justify-center items-center"
			>
				<Icon name={`${icon}`} size={40} color={COLORS.light} />
			</View>

			<Text className="text-center mt-1">{`${title}`}</Text>
		</Pressable>
	);
}
