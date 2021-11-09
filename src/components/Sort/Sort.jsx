import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { onChangeFilters } from '../../store/filters/filters.actions';
import { useFilters } from '../../store/selectors';

import { sortByOptions } from './sortOptions';

import { FiltersLabel } from '../Filters/Filters.style';

import { Wrapper, Select } from './Sort.style';

export const Sort = () => {
	const dispatch = useDispatch();
	const { sort_by, subType } = useSelector(useFilters);

	const handleChange = ({ target }) => {
		const { name, value } = target;

		dispatch(onChangeFilters({ name, value }));
	};

	return (
		<Wrapper>
			<FiltersLabel htmlFor='sort_by'>Сортировать</FiltersLabel>
			<Select
				onChange={handleChange}
				value={sort_by}
				name='sort_by'
				id='sort_by'
				disabled={subType}
			>
				{sortByOptions.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</Select>
		</Wrapper>
	);
};
