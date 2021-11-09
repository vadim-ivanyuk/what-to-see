import styled from 'styled-components';

import { colorDark, colorOrange, colorWhite } from '../../theme/colors';

export const Btn = styled.button`
	display: block;
	width: max-content;
	cursor: pointer;
	border: 1px solid transparent;
	font-weight: bold;
	color: ${colorWhite};
	text-align: center;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
	background: ${colorDark};
	padding: 0.375rem 2rem;
	font-size: 1rem;
	line-height: 1.5;
	outline: none;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
		border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

	&:hover {
		color: ${colorOrange};
	}

	&:disabled {
		opacity: 0.5;
		pointer-events: none;
	}
`;
