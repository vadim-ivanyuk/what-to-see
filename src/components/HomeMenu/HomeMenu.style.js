import styled from 'styled-components';

import { colorDark, colorWhite } from '../../theme/colors';

export const MoviesMenuWrapper = styled.div`
	width: 100%;
	padding-bottom: 7px;
	margin: 5px 0px;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const MenuTitle = styled.p`
	font-size: 17px;
	font-weight: bold;
	width: max-content;
	border: 1px solid ${colorDark};
	border-radius: 14px;
	padding: 4px 12px;
	margin-right: 6px;
	margin-top: 8px;
	cursor: pointer;
	${({ checked }) =>
		checked && {
			background: colorDark,
			color: colorWhite,
		}};

	&:hover {
		background: ${colorDark};
		color: ${colorWhite};
	}
`;

export const MenuSubTitle = styled(MenuTitle)`
	font-size: 13px;
`;
