import styled from 'styled-components';

import { colorDark, colorWhite } from '../../theme/colors';

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	padding: 20px;
	margin-top: 20px;
	background: ${colorDark};
`;

export const FlexWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	position: relative;
	width: 100%;
`;

export const BlockTitle = styled.p`
	color: ${colorWhite};
	font-size: 22px;
	margin-bottom: 12px;
	font-weight: bold;
	text-decoration: underline;
	text-align: ${({ center }) => (center ? 'center' : 'left')};
`;

export const MoreInfoWrapper = styled.div`
	width: 300px;
	height: 160px;
	padding: 0px 5px;

	@media (max-width: 400px) {
		width: 100%;
		height: 100%;
	}
`;

export const KeywordsWrapper = styled.div`
	width: 500px;
	height: 200px;
	padding: 0px 5px;

	@media (max-width: 400px) {
		margin-top: 15px;
		width: 100%;
	}
`;

export const SocialWrapper = styled.div`
	width: 300px;
	height: 100px;
	padding: 0px 5px;

	@media (max-width: 400px) {
		width: 100%;
		margin-top: 15px;
	}
`;
