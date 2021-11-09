import React from 'react';
import PropTypes from 'prop-types';

import { TitleWrapper } from './Title.style';

export const Title = ({ text }) => <TitleWrapper>{text}</TitleWrapper>;

Title.propTypes = {
	text: PropTypes.string.isRequired,
};
