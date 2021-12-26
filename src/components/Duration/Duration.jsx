import React from 'react';

import { Range } from '../Range';

import { FilterName } from '../Filters/Filters.style';

export const Duration = () => {
	return (
		<div>
			<FilterName>Продолжительность</FilterName>
			<Range
				min={0}
				max={400}
				step={15}
				durationType={'мин.'}
				storeFilter={'with_runtime'}
			/>
		</div>
	);
};
