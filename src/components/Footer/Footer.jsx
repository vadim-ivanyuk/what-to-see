import React from 'react';

import { Container } from '../../theme/GlobalComponents';

import { Wrapper, Copyright } from './Footer.style';

export const Footer = () => {
	return (
		<Wrapper>
			<Container>
				<Copyright>Copyright 2021</Copyright>
			</Container>
		</Wrapper>
	);
};
