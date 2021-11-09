import styled from 'styled-components';

import { colorWhite } from '../../../theme/colors';

export const Wrapper = styled.div`
	padding: 15px;
	border: 1px solid #f5f5f5;
	border-radius: 10px;
	box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
	background: ${colorWhite};
	margin-top: 10px;
`;

export const Select = styled.select`
	display: block;
	width: 100%;
	height: calc(1.5em + 0.75rem + 2px);
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	color: #495057;
	background-color: ${colorWhite};
	background-clip: padding-box;
	border: 1px solid #ced4da;
	border-radius: 0.25rem;
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	margin-top: 10px;
	cursor: pointer;
`;
