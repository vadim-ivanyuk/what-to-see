import React from 'react';
import PropTypes from 'prop-types';

import { Btn } from './Button.style';

export const Button = ({ text, handleClick, disabled, type = 'button' }) => {
	return (
		<Btn type={type} disabled={disabled} onClick={handleClick}>
			{text}
		</Btn>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	handleClick: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
	type: PropTypes.string,
};
