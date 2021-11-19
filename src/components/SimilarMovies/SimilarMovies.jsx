import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Slider } from '../Slider';
import { Title } from '../Title';

import { handleError, myAxios } from '../../helpers';

import { useFilters } from '../../store/selectors';

import { Container } from '../../theme/GlobalComponents';

export const SimilarMovies = ({ activeId }) => {
	const [similarMovies, setSimilarMovies] = useState([]);
	const { type } = useSelector(useFilters);

	useEffect(() => {
		if (activeId) {
			myAxios
				.get(`/${type}/${activeId}/similar`)
				.then(({ data }) => {
					setSimilarMovies(data.results);
				})
				.catch((error) => {
					handleError(error);
				});
		}
	}, [type, activeId]);

	return (
		<Container>
			<Title text={'Similar movies'} />
			<Slider moviesList={similarMovies} />
		</Container>
	);
};

SimilarMovies.propTypes = {
	activeId: PropTypes.string.isRequired,
};
