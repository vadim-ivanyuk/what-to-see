import styled from 'styled-components';

export const StyledImage = styled.img`
	width: 100%;
	height: 250px;
	object-fit: cover;
	filter: blur(1px);

	@media (max-width: 400px) {
		height: 280px;
	}
`;

export const StyledTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	background: rgba(0, 0, 0, 0.5);
	position: absolute;
	width: calc(100% - 30px);
	height: 100%;
	padding: 0 60px;
`;
