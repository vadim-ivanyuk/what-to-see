import styled from 'styled-components';

import { addBorderForVoteAvarage } from '../../helpers';

import { colorWhite, colorDark } from '../../theme/colors';

export const ActorCardWrapper = styled.div`
	width: 200px;
	height: 380px;
	flex-direction: column;
	box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
	margin: 10px;
	margin-bottom: 20px;
	border-radius: 0 0 5px 5px;
	background: ${colorWhite};

	@media (max-width: 200px) {
		width: 100%;
	}
`;

export const PosterImage = styled.img`
	width: 200px;
	height: 300px;
	object-fit: cover;
	border-radius: 5px 5px 0px 0px;
`;

export const Description = styled.div`
	position: relative;
	width: 100%;
	height: 75px;
	padding: 0 10px;
`;

export const RateActor = styled.p`
	position: absolute;
	margin: 0;
	width: 35px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 35px;
	top: -22px;
	left: 17px;
	color: ${colorWhite};
	box-sizing: border-box;
	padding: 0;
	border-radius: 100%;
	border: 3px inset
		${({ vote_average }) => addBorderForVoteAvarage(vote_average)};
	background: ${colorDark};
	font-size: 15px;
`;

export const ActorName = styled.p`
	position: relative;
	width: 100%;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	font-weight: 700;
	padding-top: 15px;
	margin-bottom: 0;

	& a {
		color: ${colorDark};
	}
`;

export const Character = styled.p`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;
