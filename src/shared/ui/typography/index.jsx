import React from 'react';
import { StyledTypography } from './index.style';

function Typography({
	title,
	color,
	size,
	isBold = true,
	isLineHeight = false,
	isLetterSpacing = false,
}) {
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

export default React.memo(Typography);
