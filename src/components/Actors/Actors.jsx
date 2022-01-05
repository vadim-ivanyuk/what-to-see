import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { useFilters } from '../../store/selectors';

import { Slider } from '../Slider';
import { Title } from '../Title';

import { handleError, myAxios } from '../../helpers';

import { Container } from '../../theme/GlobalComponents';

export const Actors = ({ activeId }) => {
	const [actors, setActors] = useState([]);
	const { type } = useSelector(useFilters);

	useEffect(() => {
		myAxios
			.get(`/${type}/${activeId}/credits`)
			.then(({ data }) => {
				setActors(data.cast);
			})
			.catch((error) => {
				handleError(error);
			});
	}, [type, activeId]);

	return (
		<Container>
			<Title text={'Actors'} />
			<Slider list={actors} cardType={'person'} />
		</Container>
	);
};

Actors.propTypes = {
	activeId: PropTypes.string.isRequired,
};
