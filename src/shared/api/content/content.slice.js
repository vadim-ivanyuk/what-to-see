import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	type: 'movie',
};

export const contentSlice = createSlice({
	name: 'content',
	initialState,
	reducers: {
		onChangeType: (state, { payload }) => {
			state.type = payload;
		},
	},
});

export const contentActions = contentSlice.actions;
export const contentReducer = contentSlice.reducer;
