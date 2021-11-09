import styled from 'styled-components';

import { colorDark, colorOrange, colorWhite } from '../../theme/colors';

export const Wrapper = styled.div`
	width: 100%;
	background: ${colorDark};
`;

export const SearchWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 250px;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	filter: blur(1px);
`;

export const AboveImage = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	top: 0px;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	padding: 10px 50px;
`;

export const Title = styled.p`
	font-size: 30px;
	color: ${colorWhite};
	font-weight: bold;
	margin-bottom: 10px;

	& span {
		color: ${colorOrange};
	}
`;

export const SubTitle = styled(Title)`
	letter-spacing: 0.7px;
	font-size: 18px;
`;

export const SearchInputWrapper = styled.form`
	display: flex;
`;
