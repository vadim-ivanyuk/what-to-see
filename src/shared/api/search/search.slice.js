import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	searchType: 'movie',
};

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearchType: (state, { payload }) => {
			state.searchType = payload;
		},
	},
});

export const searchActions = searchSlice.actions;
export const searchsReducer = searchSlice.reducer;
