import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY_MOVIE_DB_V3, API_URL } from 'shared/config';

export const moviesApi = createApi({
	reducerPath: 'moviesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: (build) => ({
		getTrending: build.query({
			query: ({ type, timeWindow }) => ({
				url: `trending/${type}/${timeWindow}`,
				params: {
					api_key: API_KEY_MOVIE_DB_V3,
				},
			}),
			transformResponse: (response) => response.results,
		}),
		getMovies: build.query({
			query: ({ page, type, filters }) => ({
				url: `/discover/${type}`,
				params: {
					api_key: API_KEY_MOVIE_DB_V3,
					page,
					...filters,
				},
			}),
		}),
	}),
});

export const { useLazyGetTrendingQuery, useLazyGetMoviesQuery } = moviesApi;
