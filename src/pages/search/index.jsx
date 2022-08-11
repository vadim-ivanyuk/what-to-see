import { useLocation } from 'react-router-dom';
import { SearchWidget } from 'widgets';
import { useSearchDataQuery } from 'shared/api/search';

export default function Search() {
	const { search } = useLocation();
	const { data } = useSearchDataQuery(search.split('=')[1]);

	return (
		<div>
			<SearchWidget />
		</div>
	);
}
