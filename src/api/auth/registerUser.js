import axios from 'axios';

import { URL_BASE } from '../../constants/url-base';
import { REQUEST_HEADERS } from '../../constants/headers';

export async function registerUser({ documents, basic, phone, password }) {
	try {
		const url = `${URL_BASE}/register/v4`;
		const expedition = new Date(basic?.expedition)?.toLocaleDateString('en-CA');
		const data = { ...basic, expedition };

		delete data.document_type;

		const { data: response } = await axios.post(
			url,
			JSON.stringify({ ...data, ...password, phone }),
			{
				headers: REQUEST_HEADERS.COMMON,
			}
		);
		return response;
	} catch (error) {
		console.error(error);
	}
}
