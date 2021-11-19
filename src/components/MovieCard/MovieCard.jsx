import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';

import { useFilters } from '../../store/selectors';

import { API_IMG_URL } from '../../utils/apies';
import { defaultPoster } from '../../img';

import {
	MovieItemWrapper,
	PosterImage,
	Description,
	RateMovie,
	MovieTitle,
	Release,
} from './MovieCard.style';

export const MovieCard = ({ movie }) => {
	const { type } = useSelector(useFilters);

	return (
		<MovieItemWrapper>
			<div>
				<Link to={`/${type}/${movie.id}`}>
					<PosterImage
						src={
							movie.poster_path
								? `${API_IMG_URL}${movie.poster_path}`
								: defaultPoster
						}
						alt=''
					/>
				</Link>
			</div>
			<Description>
				<RateMovie vote_average={movie.vote_average}>
					{String(movie.vote_average).substr(0, 3)}
				</RateMovie>
				<MovieTitle>
					<Link to={`/${type}/${movie.id}`}>{movie.title || movie.name}</Link>
				</MovieTitle>
				<Release>
					{dayjs(movie.release_date || movie.first_air_date || null).format(
						'MMM DD YYYY'
					)}
				</Release>
			</Description>
		</MovieItemWrapper>
	);
};

MovieCard.propTypes = {
	movie: PropTypes.shape({
		adult: PropTypes.bool,
		backdrop_path: PropTypes.string,
		genre_ids: PropTypes.array,
		original_language: PropTypes.string,
		original_title: PropTypes.string,
		overview: PropTypes.string,
		popularity: PropTypes.number,
		poster_path: PropTypes.string,
		release_date: PropTypes.string,
		title: PropTypes.string,
		video: PropTypes.bool,
		vote_average: PropTypes.number,
		vote_count: PropTypes.number,
	}),
};
