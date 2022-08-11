import styled from 'styled-components';
import { getColor, getSize, getLineHeight } from 'shared';

export const StyledTypography = styled.p`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	width: 100%;
	line-height: ${({ size, isLineHeight }) =>
		isLineHeight && getLineHeight(size)};
	color: ${({ color }) => getColor(color)};
	font-size: ${({ size }) => getSize(size)};
	font-weight: ${({ isBold }) => isBold && '700'};
	letter-spacing: ${({ isLetterSpacing }) => isLetterSpacing && '1px'};
`;
