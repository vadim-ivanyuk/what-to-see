import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getMovieThunk } from '../../store/movies/movies.thunks';
import { setActiveMovieId } from '../../store/movies/movies.actions';

import { MovieInfo } from '../../components/MovieInfo';
import { Trailers } from '../../components/Trailers';
import { AdditionalInfo } from '../../components/AdditionalInfo';

export const MoviePage = () => {
	const { movieId } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMovieThunk(movieId));
	}, [dispatch, movieId]);

	useEffect(() => {
		return () => {
			dispatch(setActiveMovieId(null));
		};
	}, [dispatch]);

	return (
		<div>
			<MovieInfo />
			<Trailers />
			<AdditionalInfo />
		</div>
	);
};
