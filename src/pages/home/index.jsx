import { Layout } from 'shared';
import {
	SearchWidget,
	Trends,
	MovieList,
	HomeNavigation,
	Sort,
	Filters,
} from 'widgets';

import { StyledContainer, StyledFiltersContainer } from './index.style';

export default function Home() {
	return (
		<div>
			<SearchWidget />
			<Layout.Container>
				<Trends />
				<HomeNavigation />
				<StyledContainer>
					<StyledFiltersContainer>
						<Sort />
						<Filters />
					</StyledFiltersContainer>
					<MovieList />
				</StyledContainer>
			</Layout.Container>
		</div>
	);
}
