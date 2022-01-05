import React from 'react';
import PropTypes from 'prop-types';

import { ActorCard } from '../ActorCard/ActorCard';
import { MovieCard } from '../MovieCard';

export const Card = ({ cardType, list }) => {
	switch (cardType) {
		case 'person':
			return <ActorCard actor={list} />;
		default:
			return <MovieCard movie={list} />;
	}
};

Card.propTypes = {
	cardType: PropTypes.string,
	list: PropTypes.shape({
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
