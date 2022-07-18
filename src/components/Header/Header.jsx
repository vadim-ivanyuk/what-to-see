import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../../theme/GlobalComponents';

import { Wrapper, Logo, Name, WithTmdbApi } from './Header.style';

export const Header = () => {
	return (
		<Wrapper id='header'>
			<Container>
				<Logo>
					<Name>
						<Link to='/'>
							What <span> to watch?</span>
						</Link>
					</Name>
					<WithTmdbApi>with TMDB api</WithTmdbApi>
				</Logo>
			</Container>
		</Wrapper>
	);
};
