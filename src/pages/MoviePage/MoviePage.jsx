import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { myAxios, handleError } from '../../helpers';

import { MainInfo } from '../../components/MainInfo';
import { Trailers } from '../../components/Trailers';
import { AdditionalInfo } from '../../components/AdditionalInfo';
import { Actors } from '../../components/Actors';
import { SimilarMovies } from '../../components/SimilarMovies';

export const MoviePage = () => {
	const [movie, setMovie] = useState({});
	const { movieId } = useParams();

	useEffect(() => {
		getMovie();

		document.querySelector('#header').scrollIntoView({
			behavior: 'smooth',
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [movieId]);

	const getMovie = () => {
		myAxios
			.get(`/movie/${movieId}`)
			.then(({ data }) => {
				setMovie(data);
			})
			.catch((error) => {
				handleError(error);
			});
	};

	return (
		<div>
			<MainInfo info={movie} />
			<Trailers activeId={movieId} />
			<Actors activeId={movieId} />
			<AdditionalInfo info={movie} />
			<SimilarMovies activeId={movieId} />
		</div>
	);
};
