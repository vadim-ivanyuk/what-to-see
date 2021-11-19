import styled from 'styled-components';

import { colorDark, colorOrange, colorWhite } from '../../theme/colors';

export const SearchFiltersWrapper = styled.div`
	width: 25%;
	min-width: 250px;
	height: max-content;
	border: 1px solid ${colorWhite};
	border-radius: 10px;
	box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
	background: ${colorWhite};
	margin-top: 10px;
`;

export const Title = styled.div`
	font-size: 22px;
	font-weight: 700;
	padding: 15px 15px;
	border-radius: 10px 10px 0px 0px;
	background: ${colorDark};
	color: ${colorOrange};
`;

export const FiltersListItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 17px;
	font-size: 17px;
	font-weight: bold;
	cursor: pointer;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
		border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	${({ checked }) => checked && { background: colorDark, color: colorWhite }}

	&:last-child {
		border-radius: 0px 0px 10px 10px;
	}

	&:hover {
		background: ${colorDark};
		color: ${colorWhite};
	}
`;

export const TotalResults = styled.div`
	padding: 1px 7px;
	border-radius: 10px;
	font-weight: normal;
	background: ${colorWhite};
	color: ${colorDark};
`;
