import React from 'react';
import PropTypes from 'prop-types';

import { TvInfo } from '../TvInfo';
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

export const AdditionalInfo = ({ info = {} }) => {
	return (
		<Wrapper>
			<Container>
				<TvInfo />
				<FlexWrapper>
					<MoreInfoWrapper>
						<MoreInfo info={info} />
					</MoreInfoWrapper>
					<KeywordsWrapper>
						<MovieKeywords activeId={info.id} />
					</KeywordsWrapper>
					<SocialWrapper>
						<Social activeId={info.id} />
					</SocialWrapper>
				</FlexWrapper>
			</Container>
		</Wrapper>
	);
};

AdditionalInfo.propTypes = {
	info: PropTypes.shape({
		poster_path: PropTypes.string,
		title: PropTypes.string,
		name: PropTypes.string,
		tagline: PropTypes.string,
		vote_average: PropTypes.number,
		status: PropTypes.string,
		release_date: PropTypes.string,
		genres: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number,
				name: PropTypes.string,
			})
		),
		original_language: PropTypes.string,
		production_companies: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.namber,
				name: PropTypes.string,
			})
		),
		production_countries: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.namber,
				name: PropTypes.string,
			})
		),
		overview: PropTypes.string,
	}),
};
