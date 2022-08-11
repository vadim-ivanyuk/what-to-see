import React from 'react';
import { Typography } from 'shared';
import { StyledCheckbox } from './index.style';

export const Checkbox = React.memo(
	({ checked, title, color = 'dark', size = 'titleH5' }) => {
		return (
			<StyledCheckbox checked={checked}>
				<Typography title={title} color={color} size={size} />
			</StyledCheckbox>
		);
	}
);
