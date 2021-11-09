import styled from 'styled-components';

import { colorDark, colorWhite } from '../../theme/colors';

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 70px;
	background: ${colorDark};
	margin-top: 20px;
`;

export const Copyright = styled.p`
	color: ${colorWhite};
`;
