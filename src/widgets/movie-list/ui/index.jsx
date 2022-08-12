import { DynamicPagination } from 'features';
import { useLazyGetMoviesQuery } from 'shared/api/movies';

import { StyledMovieList } from './index.style';

export const MovieList = () => {
	const [getMovies] = useLazyGetMoviesQuery();

	return (
		<StyledMovieList>
			<DynamicPagination getData={getMovies}>
				<DynamicPagination.Movies />
			</DynamicPagination>
		</StyledMovieList>
	);
};
