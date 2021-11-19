import React from 'react';
import { useSelector } from 'react-redux';

import { useFilters } from '../../store/selectors';

export const TvInfo = () => {
	const { type } = useSelector(useFilters);

	return <>{type === 'tv' && <div>Tv</div>}</>;
};
