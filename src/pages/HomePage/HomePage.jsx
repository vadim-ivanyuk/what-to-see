import React from 'react';

import { Trends } from '../../components/Trends';
import { Search } from '../../components/Search';
import { MoviesMenu } from '../../components/MoviesMenu';
import { Filters } from '../../components/Filters/Filters';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { Pagination } from '../../components/Pagination';

import { Container } from '../../theme/GlobalComponents';

import { FlexWrapper, MoviesListWrapper } from './HomePage.style';

export const HomePage = () => {
	return (
		<>
			<Container>
				<Trends />
			</Container>
			<Search />
			<Container>
				<MoviesMenu />
				<FlexWrapper>
					<Filters />
					<MoviesListWrapper>
						<MoviesList />
						<Pagination />
					</MoviesListWrapper>
				</FlexWrapper>
			</Container>
		</>
	);
};
