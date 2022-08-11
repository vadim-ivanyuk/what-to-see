import { configureStore } from '@reduxjs/toolkit';
import { searchApi } from './search';
import { moviesApi } from './movies';

export const store = configureStore({
	reducer: {
		[searchApi.reducerPath]: searchApi.reducer,
		[moviesApi.reducerPath]: moviesApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(searchApi.middleware, moviesApi.middleware),
});
