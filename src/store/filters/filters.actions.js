import * as types from './filters.types';

export const onChangeFilters = ({ name, value }) => ({
	type: types.ONCHANGE_FILTERS,
	payload: { name, value },
});

export const resetFilters = () => ({
	type: types.RESET_FILTERS,
});

export const setTotalPages = (total_pages) => ({
	type: types.SET_TOTAL_PAGES,
	payload: { total_pages },
});

export const onChangePage = (page) => ({
	type: types.ONCHANGE_PAGE,
	payload: { page },
});
