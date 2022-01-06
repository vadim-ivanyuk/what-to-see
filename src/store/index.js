import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

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
	composeWithDevTools(
		applyMiddleware(
			thunk,
			clearFiltersWhenChangeMovieType,
			updatePageWhenOnchangeFilters
		)
	)
);

export default store;
