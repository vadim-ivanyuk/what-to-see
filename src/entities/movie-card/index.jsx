import { Card } from 'shared';

export const MovieCard = ({
	poster_path,
	vote_average,
	title,
	name,
	release_date,
	first_air_date,
}) => {
	return (
		<Card>
			<Card.Poster poster_path={poster_path} />
			<Card.Rate vote_average={vote_average} />
			<Card.Title title={title || name} />
			<Card.Release release_date={release_date || first_air_date} />
		</Card>
	);
};
