import * as types from './filters.types';

export const onChangeFilters = ({ name, value }) => ({
	type: types.ONCHANGE_FILTERS,
	payload: { name, value },
});

export const resetFilters = () => ({
	type: types.RESET_FILTERS,
});
