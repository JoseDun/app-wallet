import axios from 'axios';
import { URL_BASE } from '@env';

export async function smsVerification(body = {}) {
	const url = new URL(`${URL_BASE}/sms/verify`);

	const { data } = await axios.post(url.toString(), body);

	return data;
}
