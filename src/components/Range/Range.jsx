import React from 'react';
import MultiRangeSlider from 'multi-range-slider-react';
import { useSelector, useDispatch } from 'react-redux';

import { useFilters } from '../../store/selectors';
import { onChangeFilters } from '../../store/filters/filters.actions';

import { useRange } from '../../hooks';

import { RangeWrapper, Select } from './Range.style';
import './multiRangeSlider.css';

export const Range = ({ min, max, step, durationType, storeFilter }) => {
	const filters = useSelector(useFilters);
	const { minValue, maxValue, handleChange } = useRange(
		...filters[storeFilter]
	);
	const disptach = useDispatch();

	const validate = () => {
		const [storeMinValue, storeMaxValue] = filters[storeFilter];

		return minValue === storeMinValue && maxValue === storeMaxValue;
	};

	const handleClick = () => {
		!validate() &&
			disptach(
				onChangeFilters({ name: storeFilter, value: [minValue, maxValue] })
			);
	};

	return (
		<RangeWrapper>
			<MultiRangeSlider
				min={min}
				max={max}
				step={step}
				ruler={false}
				label={true}
				preventWheel={false}
				minValue={minValue}
				maxValue={maxValue}
				onInput={handleChange}
			/>
			<Select onClick={handleClick}>
				Выбрать от <b>{minValue + durationType}</b> до
				<b> {maxValue + durationType}</b>
			</Select>
		</RangeWrapper>
	);
};

Range.defaultProps = {
	min: 0,
	max: 10,
	step: 1,
	durationType: '',
};
