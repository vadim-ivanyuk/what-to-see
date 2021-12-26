import * as types from './filters.types';
import dayjs from 'dayjs';

const initialState = {
	type: 'movie',
	subType: null,
	sort_by: 'popularity.desc',
	releaseDates: ['', dayjs().format('YYYY-MM-DD')],
	with_genres: [],
	with_keywords: [],
	with_runtime: ['0', 400],
	vote_average: ['0', 10],
	page: 1,
};

export const filtersReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case types.ONCHANGE_FILTERS:
			return {
				...state,
				[payload.name]: payload.value,
			};
		case types.RESET_FILTERS:
			return initialState;
		default:
			return state;
	}
};
