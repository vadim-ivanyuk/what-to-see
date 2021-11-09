import * as types from './filters.types';

const initialState = {
	type: 'movie',
	subType: null,
	sort_by: 'popularity.desc',
	primary_release_year: new Date().getFullYear(),
	with_genres: [],
	page: 1,
	total_pages: null,
	with_keywords: [],
};

export const filtersReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case types.ONCHANGE_FILTERS:
			return { ...state, [payload.name]: payload.value };
		case types.RESET_FILTERS:
			return {
				...initialState,
				type: state.type,
			};
		case types.SET_TOTAL_PAGES:
			return { ...state, total_pages: payload.total_pages };
		case types.ONCHANGE_PAGE:
			return { ...state, page: payload.page };
		default:
			return state;
	}
};
