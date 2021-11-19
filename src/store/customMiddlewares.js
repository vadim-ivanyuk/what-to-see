import { onChangeFilters, resetFilters } from './filters/filters.actions';

export const clearFiltersWhenChangeMovieType =
	({ dispatch }) =>
	(next) =>
	(action) => {
		const { payload } = action;

		if (payload?.name === 'type') {
			dispatch(resetFilters());
		}

		return next(action);
	};

export const updatePageWhenOnchangeFilters =
	({ dispatch, getState }) =>
	(next) =>
	(action) => {
		const { filters } = getState();
		const { payload } = action;

		if (
			Object.keys(filters).includes(payload?.name) &&
			payload?.name !== 'page' &&
			filters.page !== 1
		) {
			dispatch(onChangeFilters({ name: 'page', value: 1 }));
		}

		return next(action);
	};
