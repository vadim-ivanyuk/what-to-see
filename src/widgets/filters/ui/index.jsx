import { useSelector } from 'react-redux';

import { Typography, useContentSelector, useFiltersSelector } from 'shared';

import { ReleaseDates } from './release-dates';
import { Genres } from './genres';
import { StyledFilters } from './index.style';

export const Filters = () => {
	const type = useSelector(useContentSelector);
	const { with_genres } = useSelector(useFiltersSelector);

	return (
		<StyledFilters>
			<Typography title={'Filters'} color={'dark'} size={'titleH2'} />
			<ReleaseDates />
			<Genres type={type} with_genres={with_genres} />
		</StyledFilters>
	);
};
