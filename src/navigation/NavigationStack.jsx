import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SCREENS } from '../constants/screens';

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			{Object.keys(SCREENS).map((key) => (
				<Stack.Screen {...SCREENS[key]} key={key} />
			))}
		</Stack.Navigator>
	);
}
