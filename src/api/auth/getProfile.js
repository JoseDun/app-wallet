import axios from 'axios';
import { URL_BASE } from '../../constants/url-base';

export async function getProfile() {
	const url = `${URL_BASE}/me`;

	const { data } = await axios.get(url);

	return data;
}
