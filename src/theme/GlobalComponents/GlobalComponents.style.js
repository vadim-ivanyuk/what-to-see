import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	width: 100%;
	max-width: 1250px;
	height: max-content;
	margin: 0 auto;
	padding: 0px 15px;
	justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
	align-items: ${({ alignItems }) => alignItems || 'flex-start'};
`;
