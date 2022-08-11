import { Layout, Typography } from 'shared/ui';

import { StyledCopyrightContainer } from './index.style';

export default function Footer() {
	return (
		<Layout.Wrapper>
			<Layout.Container>
				<StyledCopyrightContainer>
					<Typography title={'Copyright 2022'} isBold={false} />
				</StyledCopyrightContainer>
			</Layout.Container>
		</Layout.Wrapper>
	);
}
