import styled from 'styled-components';

import { theme } from 'shared';

export const StyledSearchNavigation = styled.div`
	width: 300px;
	height: max-content;
	border: 1px solid rgb(245, 245, 245);
	border-radius: 10px;
	box-shadow: rgb(0 0 0 / 20%) 0px 4px 8px 0px;
	background: rgb(245, 245, 245);
	margin-top: 10px;
`;

export const StyledTitleContainer = styled.div`
	padding: 15px;
	border-radius: 10px 10px 0px 0px;
	background: ${theme.COLOR_DARK};
`;

export const StyledSearchType = styled.div`
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: justify;
	justify-content: space-between;
	padding: 10px 17px;
	font-size: 17px;
	font-weight: bold;
	cursor: pointer;
	transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s,
		border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
	background: ${({ checked }) => checked && theme.COLOR_ORANGE};

	&:last-child {
		border-radius: 0px 0px 10px 10px;
	}
	&:hover {
		background: ${theme.COLOR_ORANGE};
	}
`;
