import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
	name: 'movies',
	initialState: [],
	reducers: {
		addMovies: (state, { payload }) => {
			state.push(payload);
		},
	},
});

export const moviesActions = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
