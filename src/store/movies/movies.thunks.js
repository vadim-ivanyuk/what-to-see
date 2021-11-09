import { myAxios, handleError } from '../../helpers';

import { getMovies, getMovie, setActiveMovieId } from './movies.actions';

export const getMoviesThunk = () => (dispatch, getState) => {
	const { filters } = getState();

	const with_keywords = filters.with_keywords
		.map((with_keyword) => with_keyword.id)
		.join(',');

	const query = {
		sort_by: filters.sort_by,
		primary_release_year: filters.primary_release_year,
		page: filters.page,
		with_genres: filters.with_genres.join(','),
		with_keywords,
	};

	if (filters.subType) {
		myAxios
			.get(`/${filters.type}/${filters.subType}`, query)
			.then(({ data }) => {
				dispatch(getMovies(data.results, data.total_pages));
			})
			.catch((error) => {
				handleError(error);
			});
	} else {
		myAxios
			.get(`/discover/${filters.type}`, query)
			.then(({ data }) => {
				dispatch(getMovies(data.results, data.total_pages));
			})
			.catch((error) => {
				handleError(error);
			});
	}
};

export const getMovieThunk = (movieId) => (dispatch, getState) => {
	const { filters } = getState();

	myAxios
		.get(`/${filters.type}/${movieId}`)
		.then(({ data }) => {
			dispatch(getMovie(data));
			dispatch(setActiveMovieId(data.id));
		})
		.catch((error) => {
			handleError(error);
		});
};
