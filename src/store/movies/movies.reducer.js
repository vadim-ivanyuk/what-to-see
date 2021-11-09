import * as types from './movies.types';

const initialState = {
	currentMovies: [],
	movie: {},
	activeMovieId: null,
	trendMovies: [],
};

export const moviesReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case types.GET_MOVIES:
			return { ...state, currentMovies: payload.movies };
		case types.GET_MOVIE:
			return { ...state, movie: payload.movie };
		case types.SET_ACTIVE_MOVIE_ID:
			return { ...state, activeMovieId: payload.activeMovieId };
		case types.SET_TREND_MOVIES:
			return { ...state, trendMovies: payload.trendMovies };
		default:
			return state;
	}
};
