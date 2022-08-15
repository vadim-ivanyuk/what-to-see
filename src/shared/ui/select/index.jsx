import React from 'react';

import { StyledSelect } from './index.style';
export const Select = React.memo(
	({ handleChange, value, name, disabled, options }) => {
		return (
			<StyledSelect
				onChange={handleChange}
				value={value}
				name={name}
				disabled={disabled}
			>
				{options?.map(({ value, title }, index) => (
					<option key={index} value={value}>
						{title}
					</option>
				))}
			</StyledSelect>
		);
	}
);
