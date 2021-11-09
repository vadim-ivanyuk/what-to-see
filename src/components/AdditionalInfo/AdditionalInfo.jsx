import React from 'react';

import { MoreInfo } from '../MoreInfo';
import { MovieKeywords } from '../MovieKeywords';
import { Social } from '../Social';

import { Container } from '../../theme/GlobalComponents';

import {
	Wrapper,
	FlexWrapper,
	MoreInfoWrapper,
	KeywordsWrapper,
	SocialWrapper,
} from './AdditionalInfo.style';

export const AdditionalInfo = () => {
	return (
		<Wrapper>
			<Container>
				<FlexWrapper>
					<MoreInfoWrapper>
						<MoreInfo />
					</MoreInfoWrapper>
					<KeywordsWrapper>
						<MovieKeywords />
					</KeywordsWrapper>
					<SocialWrapper>
						<Social />
					</SocialWrapper>
				</FlexWrapper>
			</Container>
		</Wrapper>
	);
};
