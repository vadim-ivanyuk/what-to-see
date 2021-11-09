import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { searchingMovies } from '../../store/movies/movies.thunks';

import { Container } from '../../theme/GlobalComponents';
import { SearchPageWrapper } from './SearchPage.style';

export const SearchPage = () => {
	const { search } = useLocation();
	const dispatch = useDispatch();
	const searchParams = search.split('=')[1];

	useEffect(() => {
		dispatch(searchingMovies(searchParams));
	}, [dispatch, searchParams]);

	return (
		<Container>
			<SearchPageWrapper>SearchPage</SearchPageWrapper>
		</Container>
	);
};
