import React from 'react';
import { StyledInput } from './index.style';

function Input({ value, onChange, name, type = 'text', placeholder = '' }) {
	return (
		<StyledInput
			value={value}
			onChange={onChange}
			name={name}
			type={type}
			placeholder={placeholder}
		/>
	);
}

export default React.memo(Input);
