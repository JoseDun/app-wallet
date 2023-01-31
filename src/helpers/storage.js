import AsyncStorage from '@react-native-async-storage/async-storage';

export const Storage = {
	get: async (key) => {
		try {
			const body = await AsyncStorage.getItem(key);
			return body != null ? JSON.parse(body) : null;
		} catch (e) {
			console.error(e);
		}
	},

	set: async (key, data) => {
		try {
			const body = JSON.stringify(data);
			await AsyncStorage.setItem(key, body);
		} catch (e) {
			console.error(e);
		}
	},
	delete: async (key) => {
		try {
			await AsyncStorage.removeItem(key);
		} catch (e) {
			console.error(e);
		}
	},
};
