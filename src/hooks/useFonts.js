import * as Font from 'expo-font';

export default useFonts = async () =>
	await Font.loadAsync({
		'Comfortaa-Light': require('../assets/comfortaa/Comfortaa-Light.ttf'),
	});
