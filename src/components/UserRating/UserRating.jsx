import React from 'react';

import { Range } from '../Range';

import { FilterName } from '../Filters/Filters.style';

export const UserRating = () => {
	return (
		<>
			<FilterName>Пользовательский рейтинг</FilterName>
			<Range storeFilter={'vote_average'} />
		</>
	);
};
