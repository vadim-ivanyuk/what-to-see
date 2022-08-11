import React from 'react';
import dayjs from 'dayjs';

import { API_IMG_URL } from 'shared/config';
import { getRate } from 'shared/lib';
import { Typography } from 'shared';

import notFoundPoster from './not-found-poster.jpg';
import {
	StyledCard,
	StyledPoster,
	StyledRate,
	StyledTitleContainer,
	StyledRelaseContainer,
} from './index.style';

function Card({ children }) {
	return <StyledCard>{children}</StyledCard>;
}

Card.Poster = React.memo(function Poster({ poster_path }) {
	const posterUrl = poster_path ? API_IMG_URL + poster_path : notFoundPoster;

	return <StyledPoster src={posterUrl} />;
});

Card.Rate = React.memo(function Rate({ vote_average }) {
	return (
		<StyledRate vote_average={vote_average}>{getRate(vote_average)}</StyledRate>
	);
});

Card.Title = React.memo(function Title({ title }) {
	return (
		<StyledTitleContainer>
			<Typography title={title} size={'titleH3'} color={'dark'} />
		</StyledTitleContainer>
	);
});

Card.Release = React.memo(function Release({ release_date }) {
	const release = release_date ? dayjs(release_date).format('MMM DD YYYY') : '';

	return (
		<StyledRelaseContainer>
			<Typography title={release} color={'dark'} isBold={false} />
		</StyledRelaseContainer>
	);
});

export default Card;
