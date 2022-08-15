import { useSelector } from 'react-redux';

import { SortBy } from 'features';
import { Typography, useFiltersSelector } from 'shared';

import { StyledSort } from './index.style';

export const Sort = () => {
	const { sort_by } = useSelector(useFiltersSelector);

	return (
		<StyledSort>
			<Typography title={'Sort'} color={'dark'} size={'titleH2'} />
			<SortBy sort_by={sort_by} />
		</StyledSort>
	);
};
