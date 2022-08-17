import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { filtersActions } from 'shared/api/filters/filters.slice';
import { searchActions } from 'shared/api/search/search.slice';
import { contentActions } from 'shared/api/content/content.slice';

const actions = {
	...filtersActions,
	...searchActions,
	...contentActions,
};

export const useActions = () => {
	const dispatch = useDispatch();

	return bindActionCreators(actions, dispatch);
};
