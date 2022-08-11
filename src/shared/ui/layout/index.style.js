import styled from 'styled-components';
import { theme } from 'shared';

export const StyledWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	background: ${theme.COLOR_DARK};
`;

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	width: 100%;
	max-width: 1250px;
	height: max-content;
	margin: 0 auto;
	padding: 0px 15px;
	overflow: hidden;
	justify-content: ${({ justifyContent }) => justifyContent ?? 'flex-start'};
	align-items: ${({ alignItems }) => alignItems ?? 'flex-start'};
`;
