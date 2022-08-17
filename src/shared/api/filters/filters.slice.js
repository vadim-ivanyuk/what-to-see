import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const initialState = {
	sort_by: 'popularity.desc',
	releaseDates: ['', dayjs().format('YYYY-MM-DD')],
	with_genres: [],
	with_keywords: [],
	with_runtime: ['0', 400],
	vote_average: ['0', 10],
};

export const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		onChangeFilters: (state, { payload }) => {
			state[payload?.name] = payload.value;
		},
	},
});

export const filtersActions = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
