import { getToken } from './token-helper';

export async function axiosRequestInterceptor(config) {
	const newConfig = config;
	const { value } = (await getToken()) || {};
	if (value) {
		newConfig.headers.Authorization = `Bearer ${value}`;
	}

	return newConfig;
}
