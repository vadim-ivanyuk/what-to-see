import styled from 'styled-components';

import { colorDark, colorGrey } from '../../theme/colors';

export const Btn = styled.button`
	display: block;
	width: 100%;
	cursor: pointer;
	border: 1px solid transparent;
	font-weight: 400;
	color: ${colorDark};
	text-align: center;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
	background: ${colorGrey};
	padding: 0.375rem 2rem;
	font-size: 1rem;
	line-height: 1.5;
	border-radius: 0.25rem;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
		border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

	&:hover {
		background: transparent;
	}

	&:disabled {
		opacity: 0.5;
		pointer-events: none;
	}
`;
