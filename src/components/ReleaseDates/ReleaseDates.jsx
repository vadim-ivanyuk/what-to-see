import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useFilters } from '../../store/selectors';
import { onChangeFilters } from '../../store/filters/filters.actions';

import { useInput } from '../../hooks';

import { Input } from '../Input';

import { FilterName } from '../Filters/Filters.style';
import { Date } from './ReleaseDates.style';

export const ReleaseDates = () => {
	const { releaseDates } = useSelector(useFilters);
	const [from, to] = releaseDates;
	const fromInput = useInput(from);
	const toInput = useInput(to);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!fromInput.isFirstRender.current) {
			dispatch(
				onChangeFilters({
					name: 'releaseDates',
					value: [fromInput.value, toInput.value],
				})
			);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch, fromInput.value, toInput.value]);

	useEffect(() => {
		fromInput.setValue(from);
		toInput.setValue(to);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [from, to]);

	return (
		<div>
			<FilterName htmlFor='primary_release_year'>Даты выхода</FilterName>
			<Date>
				<span>От</span>
				<Input placeholder='' type='date' {...fromInput} />
			</Date>
			<Date>
				<span>До</span>
				<Input placeholder='' type='date' {...toInput} />
			</Date>
		</div>
	);
};
