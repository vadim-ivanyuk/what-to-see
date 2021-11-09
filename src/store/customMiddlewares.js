import {
	onChangePage,
	resetFilters,
	setTotalPages,
} from './filters/filters.actions';

import { GET_MOVIES } from './movies/movies.types';
import { ONCHANGE_FILTERS } from './filters/filters.types';

export const clearFiltersWhenChangeMovieType =
	({ dispatch }) =>
	(next) =>
	(action) => {
		const { payload } = action;

		if (payload && payload.name === 'type') {
			dispatch(resetFilters());
		}

		return next(action);
	};

export const setTotalPagesWhenGetMovies =
	({ dispatch }) =>
	(next) =>
	(action) => {
		const { type, payload } = action;

		if (type === GET_MOVIES) {
			dispatch(setTotalPages(payload.total_pages));
		}

		return next(action);
	};

export const updatePageWhenOnchangeFilters =
	({ dispatch }) =>
	(next) =>
	(action) => {
		const { type } = action;

		if (type === ONCHANGE_FILTERS) {
			dispatch(onChangePage(1));
		}

		return next(action);
	};
