import styled from 'styled-components';

export const SocialLinks = styled.div`
	display: flex;
`;

export const SocialLinksItem = styled.div`
	margin: 4px;

	& img {
		width: 27px;
		height: 27px;
		cursor: pointer;
		filter: brightness(70%);
		transition: all 0.2s;
		&:hover {
			filter: brightness(100%);
		}
	}
`;
