import { Layout } from 'shared';
import { SearchWidget, Trends, MovieList } from 'widgets';

export default function Home() {
	return (
		<div>
			<SearchWidget />
			<Layout.Container>
				<Trends />
				<MovieList />
			</Layout.Container>
		</div>
	);
}
