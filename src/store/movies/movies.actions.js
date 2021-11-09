import * as types from './movies.types';

export const getMovies = (movies, total_pages) => ({
	type: types.GET_MOVIES,
	payload: {
		movies,
		total_pages,
	},
});

export const getMovie = (movie) => ({
	type: types.GET_MOVIE,
	payload: {
		movie,
	},
});

export const setActiveMovieId = (activeMovieId) => ({
	type: types.SET_ACTIVE_MOVIE_ID,
	payload: {
		activeMovieId,
	},
});

export const setTrendMovies = (trendMovies) => ({
	type: types.SET_TREND_MOVIES,
	payload: {
		trendMovies,
	},
});
