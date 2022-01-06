import styled from 'styled-components';

import { colorWhite } from '../../theme/colors';

export const Wrapper = styled.div`
	width: 325px;
	min-width: 250px;

	@media (max-width: 800px) {
		display: none;
	}
`;

export const FiltersLabel = styled.label`
	font-size: 22px;
	font-weight: 700;
	margin-bottom: 13px;
`;

export const FiltersWrapper = styled.div`
	padding: 15px;
	border: 1px solid #f5f5f5;
	border-radius: 10px;
	box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
	background: ${colorWhite};
	margin-top: 15px;
`;

export const FilterName = styled.label`
	display: block;
	font-size: 16px;
	font-weight: 500;
	margin-top: 10px;
`;
