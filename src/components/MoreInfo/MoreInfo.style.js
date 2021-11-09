import styled from 'styled-components';

import { colorOrange, colorWhite } from '../../theme/colors';

export const Paragraph = styled.div`
	margin-bottom: 3px;
	color: ${colorWhite};

	& a {
		color: inherit;
	}

	& strong {
		color: ${colorOrange};
	}
`;
