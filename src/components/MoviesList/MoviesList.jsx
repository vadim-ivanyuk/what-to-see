import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getMoviesThunk } from '../../store/movies/movies.thunks';
import { useMovies, useFilters } from '../../store/selectors';

import { Loader } from '../Loader';
import { MovieCard } from '../MovieCard';

import { Wrapper } from './MoviesList.style';

export const MoviesList = () => {
	const {
		sort_by,
		primary_release_year,
		type,
		subType,
		with_genres,
		page,
		with_keywords,
	} = useSelector(useFilters);
	const { currentMovies } = useSelector(useMovies);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMoviesThunk());
	}, [
		dispatch,
		sort_by,
		primary_release_year,
		type,
		subType,
		with_genres,
		page,
		with_keywords,
	]);

	return (
		<Wrapper>
			{currentMovies.length ? (
				currentMovies.map((movie) => {
					return <MovieCard key={movie.id} movie={movie} />;
				})
			) : (
				<Loader />
			)}
		</Wrapper>
	);
};
