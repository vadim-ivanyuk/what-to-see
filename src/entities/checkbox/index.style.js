import styled from 'styled-components';
import { theme } from 'shared/lib';

export const StyledCheckbox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: max-content;
	border: 1px solid ${theme.COLOR_DARK};
	border-radius: 14px;
	padding: 0 10px;
	cursor: pointer;
	background: ${({ checked }) => checked && theme.COLOR_ORANGE};

	&:hover {
		background: ${theme.COLOR_ORANGE};
	}
`;
