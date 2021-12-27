import styled from 'styled-components';

import { addBorderForVoteAvarage } from '../../helpers';
import { colorWhite, colorDark } from '../../theme/colors';

export const Wrapper = styled.div`
	position: relative;
	width: 100%;
	height: auto;
	color: ${colorWhite};
`;

export const Background = styled.div`
	display: flex;
	justify-content: flex-end;
	position: relative;
	background-image: linear-gradient(
		90deg,
		${colorDark} 20%,
		rgba(48, 65, 78, 0.64)
	);
	text-align: right;
`;

export const BackgroundImage = styled.img`
	position: relative;
	object-fit: cover;
	width: 80%;
	height: 512px;
	z-index: -2;
	@media (max-width: 830px) {
		height: 1024px;
	}
`;

export const SingleBlock = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	width: 100%;
	height: auto;
	min-height: 512px;
	max-width: 1140px;
	margin: 0 auto;
`;

export const Poster = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 380px;
	height: 512px;
	@media (max-width: 830px) {
		width: 100%;
		height: 470px;
		justify-content: flex-start;
		padding: 0px 30px;
	}
	@media (max-width: 450px) {
		padding: 0px 20px;
		justify-content: center;
	}
`;

export const PosterImage = styled.img`
	width: 290px;
	height: 435px;
	border-radius: 5px;
	object-fit: cover;
	@media (max-width: 350px) {
		width: 100%;
	}
`;

export const Description = styled.div`
	width: calc(100% - 380px);
	max-width: 760px;
	min-width: 450px;
	height: 512px;
	padding: 32px 10px;
	@media (max-width: 830px) {
		width: 100%;
		max-width: 100%;
		padding: 0px 30px;
	}
	@media (max-width: 450px) {
		min-width: auto;
		padding: 0px 20px;
	}
`;

export const Title = styled.h2`
	margin: 0px;
	font-size: 30px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	@media (max-width: 450px) {
		font-size: 25px;
	}
`;

export const TagLine = styled.p`
	font-size: 1em;
	font-weight: 400;
	font-style: italic;
	opacity: 0.7;
	margin: 0px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const VoteAvarageContainer = styled.div`
	display: flex;
	margin: 12px 0px;
`;

export const VoteAvarage = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 37px;
	height: 36px;
	font-size: 14px;
	font-weight: 600;
	border: 3px inset
		${({ vote_average }) => addBorderForVoteAvarage(vote_average)};
	border-radius: 50%;
	margin: 0px;
`;

export const VoteAvarageText = styled.p`
	margin: 0px;
	padding-left: 11px;
	line-height: 18px;
`;

export const Paragraph = styled.p`
	margin-bottom: 0.5px;
	max-height: 47px;
	overflow-y: auto;
`;

export const BoldText = styled.span`
	font-weight: bold;
`;

export const OverviewTitle = styled.h4`
	margin-top: 18px;
	margin-bottom: 2px;
	font-size: 23px;
	@media (max-width: 450px) {
		font-size: 20px;
		text-decoration: underline;
	}
`;

export const Overview = styled.div`
	width: 97%;
	padding-right: 5px;
	margin-bottom: 0px;
	max-height: ${({ tagline }) => (tagline ? '100px' : '125px')};
	overflow-x: hidden;
	overflow-y: auto;
	@media (max-width: 830px) {
		width: 100%;
		padding-right: 0px;
		max-height: fit-content;
		overflow-y: hidden;
	}
	@media (max-width: 450px) {
		max-height: ${({ tagline }) => (tagline ? '100px' : '130px')};
		overflow-y: auto;
		margin-top: 5px;
	}
`;
