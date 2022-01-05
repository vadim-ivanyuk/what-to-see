import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { useFilters } from '../../store/selectors';

import { Loader } from '../Loader';
import { Card } from '../Card';

import { Wrapper } from './List.style.';

export const List = ({ list = [] }) => {
	const { type } = useSelector(useFilters);

	return (
		<Wrapper>
			{list.length ? (
				list.map((list) => {
					return <Card key={list.id} list={list} cardType={type} />;
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
