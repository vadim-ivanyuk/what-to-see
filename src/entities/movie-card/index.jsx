import { Card } from 'shared';

export function MovieCard({ poster_path, vote_average, title, release_date }) {
	return (
		<Card>
			<Card.Poster poster_path={poster_path} />
			<Card.Rate vote_average={vote_average} />
			<Card.Title title={title} />
			<Card.Release release_date={release_date} />
		</Card>
	);
}
