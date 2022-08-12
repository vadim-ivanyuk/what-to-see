import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY_MOVIE_DB_V3, API_URL } from 'shared/config';

export const searchApi = createApi({
	reducerPath: 'searchApi',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({
		searchData: build.query({
			query: (query) => ({
				url: `search/movie`,
				params: {
					query,
					api_key: API_KEY_MOVIE_DB_V3,
				},
			}),
			transformResponse: (response) => response.results,
		}),
	}),
});

export const { useSearchDataQuery } = searchApi;
