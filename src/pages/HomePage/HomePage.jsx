import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useFilters } from '../../store/selectors';

import { myAxios, handleError } from '../../helpers';
import { getQueryParams } from './getQueryParams';

import { Trends } from '../../components/Trends';
import { Search } from '../../components/Search';
import { HomeMenu } from '../../components/HomeMenu';
import { Filters } from '../../components/Filters';
import { List } from '../../components/List';
import { Pagination } from '../../components/Pagination';

import { Container } from '../../theme/GlobalComponents';

import { FlexWrapper, MoviesListWrapper } from './HomePage.style';

export const HomePage = () => {
	const [list, setList] = useState([]);
	const [totalPages, setTotalPages] = useState(null);
	const filters = useSelector(useFilters);

	useEffect(() => {
		getList();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filters]);

	const getList = () => {
		const { type, subType } = filters;
		const query = getQueryParams(filters);

		myAxios
			.get(subType ? `/${type}/${subType}` : `/discover/${type}`, query)
			.then(({ data }) => {
				setList(data.results);
				setTotalPages(data.total_pages);
			})
			.catch((error) => {
				handleError(error);
			});
	};

	return (
		<>
			<Search />
			<Container>
				<Trends />
				<HomeMenu />
				<FlexWrapper>
					<Filters />
					<MoviesListWrapper>
						<List list={list} />
						<Pagination totalPages={totalPages} />
					</MoviesListWrapper>
				</FlexWrapper>
			</Container>
		</>
	);
};
