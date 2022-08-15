import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { filtersActions } from 'shared/api/filters/filters.slice';
import { searchActions } from 'shared/api/search/search.slice';

const actions = {
	...filtersActions,
	...searchActions,
};

export const useActions = () => {
	const dispatch = useDispatch();

	return bindActionCreators(actions, dispatch);
};
