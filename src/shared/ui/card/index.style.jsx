import styled from 'styled-components';
import { getBorderColorForRate, theme } from 'shared/lib';

export const StyledCard = styled.div`
	position: relative;
	width: 200px;
	height: 375px;
	flex-direction: column;
	box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
	margin: 10px;
	margin-bottom: 20px;
	border-radius: 0 0 5px 5px;
	background: ${theme.COLOR_WHITE};

	@media (max-width: 200px) {
		width: 100%;
	}
`;

export const StyledPoster = styled.img`
	width: 200px;
	height: 300px;
	object-fit: cover;
	border-radius: 5px 5px 0px 0px;
`;

export const StyledRate = styled.p`
	position: absolute;
	margin: 0;
	width: 35px;
	height: 35px;
	display: flex;
	justify-content: center;
	align-items: center;
	bottom: 60px;
	left: 17px;
	box-sizing: border-box;
	padding: 0;
	border-radius: 100%;
	border: 3px inset ${({ vote_average }) => getBorderColorForRate(vote_average)};
	font-size: 15px;
	background: ${theme.COLOR_DARK};
	color: ${theme.COLOR_WHITE};
`;

export const StyledTitleContainer = styled.div`
	padding: 15px 10px 0;
`;

export const StyledRelaseContainer = styled.div`
	padding: 0 10px;
`;
