import { Layout } from 'shared';
import { SearchWidget, Trends } from 'widgets';

export default function Home() {
	return (
		<div>
			<SearchWidget />
			<Layout.Container>
				<Trends />
			</Layout.Container>
		</div>
	);
}
