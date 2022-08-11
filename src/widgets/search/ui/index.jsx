import { SearchBar } from 'features';
import { Layout, Typography, Logo } from 'shared/ui';

import SearchImage from './search-image.jpg';
import { StyledImage, StyledTextContainer } from './index.style';

export function SearchWidget() {
	return (
		<Layout.Wrapper>
			<Layout.Container>
				<StyledImage src={SearchImage} alt='' />
				<StyledTextContainer>
					<div>
						<Typography title={<Logo />} size={'titleH1'} isLineHeight />
						<Typography
							title={
								'This resource is intended for searching movies, actors and series.'
							}
							size={'titleH3'}
							isLineHeight
							isLetterSpacing
						/>
					</div>
					<SearchBar />
				</StyledTextContainer>
			</Layout.Container>
		</Layout.Wrapper>
	);
}
