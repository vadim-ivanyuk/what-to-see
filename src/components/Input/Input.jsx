import React from 'react';
import PropTypes from 'prop-types';

import { Inp } from './Input.style';

export const Input = ({ onChange, value, placeholder, type = 'text' }) => {
	return (
		<Inp
			onChange={onChange}
			value={value}
			placeholder={placeholder}
			type={type}
		/>
	);
};

Input.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	placeholder: PropTypes.string.isRequired,
	type: PropTypes.string,
};
