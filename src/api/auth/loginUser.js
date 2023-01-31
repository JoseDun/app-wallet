import axios from 'axios';

import { URL_BASE } from '../../constants/url-base';
import { REQUEST_HEADERS } from '../../constants/headers';

export async function loginUser(dataBody = {}) {
	const url = new URL(`${URL_BASE}/api/auth/login`);

	const { data } = await axios.post(url.toString(), dataBody, {
		headers: REQUEST_HEADERS.COMMON,
	});

	return data;
}
