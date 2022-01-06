import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { filtersReducer } from './filters/filters.reducer';

import {
	clearFiltersWhenChangeMovieType,
	updatePageWhenOnchangeFilters,
} from './customMiddlewares';

const rootReducer = combineReducers({
	filters: filtersReducer,
});

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(
			thunk,
			clearFiltersWhenChangeMovieType,
			updatePageWhenOnchangeFilters
		)
	)
);

export default store;
