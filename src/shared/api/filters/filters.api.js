import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY_MOVIE_DB_V3, API_URL } from 'shared/config';

export const filtersApi = createApi({
	reducerPath: 'filtersApi',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({
		getGenres: build.query({
			query: ({ type }) => ({
				url: `genre/${type}/list`,
				params: {
					api_key: API_KEY_MOVIE_DB_V3,
				},
			}),
			transformResponse: (response) => response.genres,
		}),
	}),
});

export const { useLazyGetGenresQuery } = filtersApi;
