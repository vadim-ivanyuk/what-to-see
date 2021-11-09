import axios from 'axios';
import queryString from 'query-string';

import { API_URL, API_KEY_MOVIE_DB_V3 } from '../utils/apies';

export const myAxios = {
	get: (path, query = {}) =>
		axios.get(
			`${API_URL}${path}?api_key=${API_KEY_MOVIE_DB_V3}&language=ru-RU&${queryString.stringify(
				query
			)}`
		),
};
