import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY_MOVIE_DB_V3, API_URL } from 'shared/config';

export const moviesApi = createApi({
	reducerPath: 'moviesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({
		getTrending: build.query({
			query: (time_window) => ({
				url: `trending/movie/${time_window}`,
				params: {
					api_key: API_KEY_MOVIE_DB_V3,
				},
			}),
			transformResponse: (response) => response.results,
		}),
		getMovies: build.query({
			query: (page) => ({
				url: `/discover/movie`,
				params: {
					api_key: API_KEY_MOVIE_DB_V3,
					page,
				},
			}),
			transformResponse: (response) => response.results,
		}),
	}),
});

export const { useGetTrendingQuery, useLazyGetMoviesQuery } = moviesApi;
