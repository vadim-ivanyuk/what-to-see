import styled from 'styled-components';

import { colorDark, colorWhite } from '../../theme/colors';

export const TrendsWrapper = styled.div`
	max-width: calc(100vw - 30px);
	overflow: hidden;
	margin: 10px 0px;
`;

export const FlexWrapper = styled.div`
	display: flex;
	width: 350px;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 400px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;

export const Title = styled.p`
	font-size: 25px;
	font-weight: bold;
`;

export const TimeWindowMenu = styled.div`
	display: flex;
`;

export const Item = styled.div`
	font-size: 14px;
	font-weight: bold;
	width: -webkit-max-content;
	width: -moz-max-content;
	width: max-content;
	border: 1px solid ${colorDark};
	border-radius: 14px;
	padding: 4px 12px;
	margin-right: 6px;
	margin-top: 8px;
	cursor: pointer;
	${({ checked }) =>
		checked && {
			background: colorDark,
			color: colorWhite,
		}};

	&:hover {
		background: ${colorDark};
		color: ${colorWhite};
	}
`;

export const TrendsList = styled.div`
	position: relative;
	width: 100%;
	overflow: hidden;
	max-width: 1250px;
	margin: 10px 0px;
`;
