import React from 'react';

import { Sort } from '../Sort';
import { ReleaseDates } from '../ReleaseDates';
import { Genres } from '../Genres';
import { Keywords } from '../Keywords';

import { Wrapper, FiltersWrapper, FiltersLabel } from './Filters.style';

export const Filters = () => {
	return (
		<Wrapper>
			<Sort />
			<FiltersWrapper>
				<FiltersLabel>Фильтровать</FiltersLabel>
				<ReleaseDates />
				<Genres />
				<Keywords />
			</FiltersWrapper>
		</Wrapper>
	);
};
