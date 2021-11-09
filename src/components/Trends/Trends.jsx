import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { onChangeTimeWindow } from '../../store/filters/filters.actions';
import { getTrendMoviesThunk } from '../../store/movies/movies.thunks';
import { useFilters, useMovies } from '../../store/selectors';

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
	const { time_window, type } = useSelector(useFilters);
	const { trendMovies } = useSelector(useMovies);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTrendMoviesThunk());
	}, [dispatch, time_window, type]);

	const handleClick = () => {
		const updatedTimeWindow = time_window === 'day' ? 'week' : 'day';

		dispatch(onChangeTimeWindow(updatedTimeWindow));
	};

	return (
		<TrendsWrapper>
			<FlexWrapper>
				<Title>В тренде</Title>
				<TimeWindowMenu>
					<Item checked={time_window === 'day'} onClick={handleClick}>
						Сегодня
					</Item>
					<Item checked={time_window === 'week'} onClick={handleClick}>
						На этой неделе
					</Item>
				</TimeWindowMenu>
			</FlexWrapper>
			<TrendsList>
				{trendMovies.length ? <Slider moviesList={trendMovies} /> : <Loader />}
			</TrendsList>
		</TrendsWrapper>
	);
};
