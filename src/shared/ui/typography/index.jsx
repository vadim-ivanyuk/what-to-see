import React from 'react';
import { StyledTypography } from './index.style';

export const Typography = React.memo(
	({
		title,
		color,
		size,
		isBold = true,
		isLineHeight = false,
		isLetterSpacing = false,
	}) => {
		return (
			<StyledTypography
				color={color}
				size={size}
				isBold={isBold}
				isLineHeight={isLineHeight}
				isLetterSpacing={isLetterSpacing}
			>
				{title}
			</StyledTypography>
		);
	}
);
