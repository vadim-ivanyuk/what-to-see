import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { moviesReducer } from './movies/movies.reducer';
import { filtersReducer } from './filters/filters.reducer';

import {
	clearFiltersWhenChangeMovieType,
	setTotalPagesWhenGetMovies,
	updatePageWhenOnchangeFilters,
} from './customMiddlewares';

const rootReducer = combineReducers({
	movies: moviesReducer,
	filters: filtersReducer,
});

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(
			thunk,
			clearFiltersWhenChangeMovieType,
			setTotalPagesWhenGetMovies,
			updatePageWhenOnchangeFilters
		),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
