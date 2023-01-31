import {
	TOKEN_STORAGE_KEY,
	USER_DATA_STORAGE_KEY,
	USER_NUMBER_STORAGE_KEY,
} from '../constants/storage-keys';
import { Storage } from './storage';

export const setToken = (token) => {
	const tomorrow = new Date().getDate() + 1;
	const expiration = new Date();
	expiration.setDate(tomorrow);
	const data = {
		value: token,
		expiration: expiration.getTime(),
	};
	Storage.set(TOKEN_STORAGE_KEY, data);
};

export const setNumber = (number) => {
	return Storage.set(USER_NUMBER_STORAGE_KEY, number);
};

export const getToken = () => {
	const data = Storage.get(TOKEN_STORAGE_KEY);
	return data;
};

export const getNumber = () => {
	return Storage.get(USER_NUMBER_STORAGE_KEY);
};

export const tokenHasExpired = () => {
	const { expiration } = getToken();
	const todayTime = new Date().getTime();
	const hasExpired = todayTime >= expiration;

	if (hasExpired) {
		Storage.delete(TOKEN_STORAGE_KEY);
		Storage.delete(USER_DATA_STORAGE_KEY);
		return true;
	}

	return false;
};
