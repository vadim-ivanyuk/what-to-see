import { Link } from 'react-router-dom';
import { Layout, Logo, Typography } from 'shared/ui';

import { StyledLogoContainer } from './index.style';

export default function Header() {
	return (
		<Layout.Wrapper id='header'>
			<Layout.Container>
				<StyledLogoContainer>
					<Link to='/'>
						<Typography title={<Logo />} size={'titleH2'} />
					</Link>
					<Typography title={'with TMDB api'} isLetterSpacing />
				</StyledLogoContainer>
			</Layout.Container>
		</Layout.Wrapper>
	);
}
