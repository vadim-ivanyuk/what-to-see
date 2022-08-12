import { useState } from 'react';

import { MovieSlider } from 'features';
import { Typography } from 'shared';
import { useGetTrendingQuery } from 'shared/api/movies';

import { CheckboxesGroup } from './checkboxes-group';

import { timeWindows } from '../lib/timeWindows';
import { StyledTrendsGroup } from './index.style';

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
				<CheckboxesGroup
					timeWindow={timeWindow}
					handleChangeTimeWindow={handleChangeTimeWindow}
				/>
			</StyledTrendsGroup>
			<MovieSlider movies={data} />
		</div>
	);
}
