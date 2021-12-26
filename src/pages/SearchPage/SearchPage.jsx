import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

import { useFilters } from '../../store/selectors';

import { Search } from '../../components/Search';
import { SearchFilters } from '../../components/SearchFilters';
import { List } from '../../components/List';
import { Pagination } from '../../components/Pagination';

import { handleError, myAxios } from '../../helpers';

import { Container } from '../../theme/GlobalComponents';
import { FlexWrapper, MoviesListWrapper } from './SearchPage.style';

export const SearchPage = () => {
	const [searchResults, setSearchResults] = useState([]);
	const [totalPages, setTotalPages] = useState(null);
	const [totalResults, setTotalResults] = useState(null);
	const { type, page } = useSelector(useFilters);
	const { search } = useLocation();
	const [, searchParams] = search.split('=');
	const history = useHistory();

	useEffect(() => {
		if (searchParams.length) {
			getSearchData();
		} else {
			history.push('/');
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchParams, type, page]);

	const getSearchData = () => {
		const queryParams = {
			query: decodeURI(searchParams),
			page,
		};

		myAxios
			.get(`/search/${type}`, queryParams)
			.then(({ data }) => {
				setSearchResults(data.results);
				setTotalPages(data.total_pages);
				setTotalResults(data.total_results);
			})
			.catch((error) => {
				handleError(error);
			});
	};

	return (
		<>
			<Search />
			<Container>
				<FlexWrapper>
					<SearchFilters totalResults={totalResults} />
					<MoviesListWrapper>
						<List list={searchResults} />
						<Pagination totalPages={totalPages} scrollAnchor={'header'} />
					</MoviesListWrapper>
				</FlexWrapper>
			</Container>
		</>
	);
};
