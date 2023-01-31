import axios from 'axios';
import { URL_BASE } from '../../constants/url-base';

export async function verificationUser(phone) {
	const url = new URL(`${URL_BASE}/sms/validate/${phone}`);

	const { data } = await axios.post(url.toString(), { phone });

	return data;
}
