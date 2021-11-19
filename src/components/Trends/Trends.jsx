import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useFilters } from '../../store/selectors';

import { myAxios, handleError } from '../../helpers';

import { Loader } from '../Loader';
import { Slider } from '../Slider';

import {
	TrendsWrapper,
	FlexWrapper,
	Title,
	TimeWindowMenu,
	Item,
	TrendsList,
} from './Trends.style';

export const Trends = () => {
	const [trends, setTrends] = useState([]);
	const [timeWindow, setTimeWindow] = useState('day');
	const { type } = useSelector(useFilters);

	useEffect(() => {
		myAxios
			.get(`/trending/${type}/${timeWindow}`)
			.then(({ data }) => {
				setTrends(data.results);
			})
			.catch((error) => {
				handleError(error);
			});
	}, [timeWindow, type]);

	const handleClick = () => {
		setTimeWindow(timeWindow === 'day' ? 'week' : 'day');
	};

	return (
		<TrendsWrapper>
			<FlexWrapper>
				<Title>В тренде</Title>
				<TimeWindowMenu>
					<Item checked={timeWindow === 'day'} onClick={handleClick}>
						Сегодня
					</Item>
					<Item checked={timeWindow === 'week'} onClick={handleClick}>
						На этой неделе
					</Item>
				</TimeWindowMenu>
			</FlexWrapper>
			<TrendsList>
				{trends.length ? <Slider moviesList={trends} /> : <Loader />}
			</TrendsList>
		</TrendsWrapper>
	);
};
