import styled from 'styled-components';

import { colorBlack, colorOrange } from '../../theme/colors';

export const KeywordsList = styled.div`
	width: 100%;
	max-height: 150px;
	display: flex;
	flex-wrap: wrap;
	overflow-y: scroll;
`;

export const KeywordsListItem = styled.div`
	height: 25px;
	background: rgba(0, 0, 0, 0.2);
	border: 1px solid ${colorBlack};
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 3px;
	padding: 4px 10px;
	color: ${colorOrange};
	border-radius: 4px;
	font-size: 15px;
	font-weight: bold;
`;
