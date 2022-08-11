import { useState } from 'react';

import { MovieSlider } from 'features';
import { Checkbox } from 'entities/checkbox';
import { Typography } from 'shared';
import { useGetTrendingQuery } from 'shared/api/movies';

import { timeWindows } from '../lib/timeWindows';
import { StyledTrendsGroup, StyledCheckboxesContainer } from './index.style';

export function Trends() {
	const [timeWindow, setTimeWindow] = useState('day');
	const { data } = useGetTrendingQuery(timeWindow);

	const handleChangeTimeWindow = () => {
		setTimeWindow(timeWindows[timeWindow]);
	};

	return (
		<div>
			<StyledTrendsGroup>
				<div>
					<Typography title={'Trending'} size={'titleH2'} color={'dark'} />
				</div>
				<StyledCheckboxesContainer onClick={handleChangeTimeWindow}>
					<Checkbox title={'Today'} checked={timeWindow === 'day'} />
					<Checkbox title={'This week'} checked={timeWindow === 'week'} />
				</StyledCheckboxesContainer>
			</StyledTrendsGroup>
			<MovieSlider movies={data} />
		</div>
	);
}
