import { useState } from 'react';

export const useRange = (initMinValue, initMaxValue) => {
	const [minValue, setMinValue] = useState(initMinValue);
	const [maxValue, setMaxValue] = useState(initMaxValue);

	const handleChange = (e) => {
		setMinValue(e.minValue);
		setMaxValue(e.maxValue);
	};

	return {
		minValue,
		maxValue,
		handleChange,
	};
};
