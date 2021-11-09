import React from 'react';

import { Sort } from '../Sort';
import { ReleaseDate } from '../ReleaseDate';
import { Genres } from '../Genres';
import { Keywords } from '../Keywords';
import { Reset } from '../Reset';

import { Wrapper, FiltersWrapper, FiltersLabel } from './Filters.style';

export const Filters = () => {
	return (
		<Wrapper>
			<Sort />
			<FiltersWrapper>
				<FiltersLabel>Фильтровать</FiltersLabel>
				<ReleaseDate />
				<Genres />
				<Keywords />
				<Reset />
			</FiltersWrapper>
		</Wrapper>
	);
};
