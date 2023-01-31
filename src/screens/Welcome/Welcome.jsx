import { View, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Text } from 'react-native-paper';
import { Button } from 'react-native-paper';

import { SCREENS } from '../../constants/screens';

import WelcomeImage from '../../assets/images/wallet-welcome.png';

export default function Welcome() {
	const navigation = useNavigation();

	const handlePressButton = () => {
		navigation.navigate(SCREENS.LOGIN.name);
	};

	const handleLoginTextPress = () => {
		navigation.navigate(SCREENS.LOGIN.name);
	};

	const handleSignUpTextPress = () => {
		navigation.navigate(SCREENS.REGISTER.name);
	};

	return (
		<View className="items-center justify-center flex-1">
			<Image source={WelcomeImage} />
			<Text variant="titleSmall" theme="secondary" className="text-center mt-5 font-thin">
				Podrás manejar tu dinero con facilidad y con toda la seguridad que buscas.
			</Text>
			<Text variant="titleMedium" theme="secondary" className="text-center mt-5 font-medium">
				¿Listo para comenzar?
			</Text>
			<Button
				className="mt-5 w-60 shadow-2xl px-5 py-2"
				mode="contained"
				onPress={handlePressButton}
			>
				<Text className="text-light"> Empezar </Text>
			</Button>

			<View className="flex-row justify-around h-20">
				<View className=" flex-row items-end">
					<Text
						onPress={handleLoginTextPress}
						className="mt-5 text-center pr-2 text-primary"
					>
						Inicia Sesión -
					</Text>
					<Text onPress={handleSignUpTextPress} className="text-primary">
						Registrate
					</Text>
				</View>
			</View>
		</View>
	);
}
