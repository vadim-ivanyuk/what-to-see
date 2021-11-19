import styled from 'styled-components';

import { colorDark, colorOrange, colorWhite } from '../../theme/colors';

export const Wrapper = styled.div`
	width: 100%;
	height: 70px;
	background: ${colorDark};
	display: flex;
	align-items: center;
`;

export const Logo = styled.div`
	width: max-content;
	display: flex;
	align-items: flex-end;
`;

export const Name = styled.p`
	color: ${colorWhite};
	font-size: 24px;
	font-weight: 700;

	& a {
		color: inherit;
	}

	& span {
		color: ${colorOrange};
	}
`;

export const WithTmdbApi = styled.p`
	font-size: 14px;
	font-weight: 700;
	letter-spacing: 1px;
	margin-left: 10px;
	color: ${colorWhite};
`;
