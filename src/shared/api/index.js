import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { searchApi } from './search/search.api';
import { moviesApi } from './movies/movies.api';
import { filtersApi } from './filters/filters.api';
import { filterSlice } from './filters/filters.slice';
import { searchSlice } from './search/search.slice';

export const store = configureStore({
	reducer: {
		[searchApi.reducerPath]: searchApi.reducer,
		[moviesApi.reducerPath]: moviesApi.reducer,
		[filtersApi.reducerPath]: filtersApi.reducer,
		filters: filterSlice.reducer,
		search: searchSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			searchApi.middleware,
			moviesApi.middleware,
			filtersApi.middleware
		),
	devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);
