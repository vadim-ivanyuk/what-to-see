import { DynamicPagination } from 'features';

import { StyledMovieList } from './index.style';

export const MovieList = () => {
	return (
		<StyledMovieList>
			<DynamicPagination>
				<DynamicPagination.Movies />
			</DynamicPagination>
		</StyledMovieList>
	);
};
