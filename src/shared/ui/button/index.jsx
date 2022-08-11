import React from 'react';

import { StyledButton } from './index.style';

function Button({ text, handleClick, disabled = false }) {
	return (
		<StyledButton onClick={handleClick} disabled={disabled}>
			{text}
		</StyledButton>
	);
}

export default React.memo(Button);
