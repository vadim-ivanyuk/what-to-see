import { SearchBar } from 'features';
import { Layout } from 'shared';

import { Greeting } from './greeting';

import SearchImage from './search-image.jpg';
import { StyledImage, StyledTextContainer } from './index.style';

export function SearchWidget() {
	return (
		<Layout.Wrapper>
			<Layout.Container>
				<StyledImage src={SearchImage} alt='' />
				<StyledTextContainer>
					<Greeting />
					<SearchBar />
				</StyledTextContainer>
			</Layout.Container>
		</Layout.Wrapper>
	);
}
