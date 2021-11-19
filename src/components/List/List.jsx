import React from 'react';
import PropTypes from 'prop-types';

import { Loader } from '../Loader';
import { MovieCard } from '../MovieCard';

import { Wrapper } from './List.style.';

export const List = ({ list = [] }) => {
	return (
		<Wrapper>
			{list.length ? (
				list.map((movie) => {
					return <MovieCard key={movie.id} movie={movie} />;
				})
			) : (
				<Loader />
			)}
		</Wrapper>
	);
};

List.propTypes = {
	list: PropTypes.arrayOf(
		PropTypes.shape({
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
		})
	),
};
