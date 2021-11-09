import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useFilters } from '../../../store/selectors';
import { onChangeFilters } from '../../../store/filters/filters.actions';

import { Select } from '../Sort/Sort.style';
import { FilterName } from '../Filters.style';

const getYears = () => {
	const currentYear = new Date().getFullYear();

	return Array.from(new Array(70), (value, index) => currentYear + 2 - index);
};

const years = getYears();

export const ReleaseDate = () => {
	const { primary_release_year } = useSelector(useFilters);
	const dispatch = useDispatch();

	const handleChange = ({ target }) => {
		const { name, value } = target;

		dispatch(onChangeFilters({ name, value }));
	};

	return (
		<div>
			<FilterName htmlFor='primary_release_year'>Дата выхода</FilterName>
			<Select
				name='primary_release_year'
				value={primary_release_year}
				id='primary_release_year'
				onChange={handleChange}
			>
				{years.map((year) => (
					<option key={year} value={year}>
						{year}
					</option>
				))}
			</Select>
		</div>
	);
};
