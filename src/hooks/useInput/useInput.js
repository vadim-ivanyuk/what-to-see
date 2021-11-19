import { useRef, useState } from 'react';

export const useInput = (initial = '') => {
	const [value, setValue] = useState(initial === 'undefined' ? '' : initial);
	const isFirstRender = useRef(true);

	return {
		value,
		onChange: (e) => {
			setValue(e.target.value);

			isFirstRender.current = false;
		},
		reset: () => {
			setValue('');
		},
		isFirstRender,
		setValue,
	};
};
