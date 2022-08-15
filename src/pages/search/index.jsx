import { useLocation } from 'react-router-dom';

import { SearchWidget } from 'widgets';
import { DynamicPagination, SearchNavigation } from 'features';
import { getSearchQuery, Layout } from 'shared';

import { StyledSearch, StyledDynamicPaginationSearch } from './index.style';

export default function Search() {
	const { search } = useLocation();

	return (
		<div>
			<SearchWidget />
			<Layout.Container>
				<StyledSearch>
					<SearchNavigation />
					<StyledDynamicPaginationSearch>
						<DynamicPagination>
							<DynamicPagination.Search query={getSearchQuery(search)} />
						</DynamicPagination>
					</StyledDynamicPaginationSearch>
				</StyledSearch>
			</Layout.Container>
		</div>
	);
}
