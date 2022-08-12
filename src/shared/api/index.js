import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { searchApi } from './search/search.api';
import { moviesApi } from './movies/movies.api';
import { moviesReducer } from './movies/movies.slice';

export const store = configureStore({
	reducer: {
		[searchApi.reducerPath]: searchApi.reducer,
		[moviesApi.reducerPath]: moviesApi.reducer,
		movies: moviesReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(searchApi.middleware, moviesApi.middleware),
});

setupListeners(store.dispatch);
