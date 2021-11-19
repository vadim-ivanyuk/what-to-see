import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { useFilters } from '../../store/selectors';
import { onChangeFilters } from '../../store/filters/filters.actions';

import { filtersList } from './filtersList';

import {
	SearchFiltersWrapper,
	Title,
	FiltersListItem,
	TotalResults,
} from './SearchFilters.style';

let checked;

export const SearchFilters = ({ totalResults }) => {
	const { type } = useSelector(useFilters);
	const dispatch = useDispatch();

	const handleClick = (type) => () => {
		dispatch(onChangeFilters({ name: 'type', value: type }));
	};

	return (
		<SearchFiltersWrapper>
			<Title>Результаты поиска</Title>
			<div>
				{filtersList.map((filter) => {
					checked = filter.id === type;

					return (
						<FiltersListItem
							onClick={handleClick(filter.id)}
							checked={checked}
							key={filter.id}
						>
							{filter.name}
							{checked && <TotalResults>{totalResults}</TotalResults>}
						</FiltersListItem>
					);
				})}
			</div>
		</SearchFiltersWrapper>
	);
};

SearchFilters.propTypes = {
	totalResults: PropTypes.number,
};
