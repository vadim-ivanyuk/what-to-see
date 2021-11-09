import styled from 'styled-components';

import { colorDark, colorWhite } from '../../../theme/colors';

export const WrapperInput = styled.div`
	margin-top: 10px;
`;

export const KeywordsWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
`;

export const Keyword = styled.div`
	width: max-content;
	border: 1px solid ${colorDark};
	border-radius: 14px;
	padding: 4px 12px;
	font-size: 0.9em;
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
