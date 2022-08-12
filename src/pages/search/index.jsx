import { useLocation } from 'react-router-dom';

import { SearchWidget } from 'widgets';
import { useSearchDataQuery } from 'shared/api/search';
import { getSearchQuery } from 'shared';

export default function Search() {
	const { search } = useLocation();
	const { data } = useSearchDataQuery(getSearchQuery(search));

	return (
		<div>
			<SearchWidget />
		</div>
	);
}
