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
		),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
