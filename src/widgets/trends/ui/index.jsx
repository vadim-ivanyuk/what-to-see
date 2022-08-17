import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { MovieSlider } from 'features';
import { Typography, useContentSelector } from 'shared';
import { useLazyGetTrendingQuery } from 'shared/api/movies';

import { CheckboxesGroup } from './checkboxes-group';

import { timeWindows } from '../lib/timeWindows';
import { StyledTrendsGroup } from './index.style';

export const Trends = () => {
	const [timeWindow, setTimeWindow] = useState('day');
	const [getTrends, { data }] = useLazyGetTrendingQuery();
	const type = useSelector(useContentSelector);

	useEffect(() => {
		getTrends({ type, timeWindow });
	}, [getTrends, type, timeWindow]);

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
};
