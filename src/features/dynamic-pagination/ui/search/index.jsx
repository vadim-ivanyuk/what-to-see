import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { MovieCard } from 'entities/movie-card';
import { useLazySearchDataQuery } from 'shared/api/search';
import { useSearchSelector } from 'shared';

export const Search = React.memo(({ data, fetching, updateState, query }) => {
	const [getSearchData] = useLazySearchDataQuery();
	const [page, setPage] = useState(1);
	const { searchType } = useSelector(useSearchSelector);

	useEffect(() => {
		if (fetching) {
			onSearch(page, fetching);
		}

		// eslint-disable-next-line
	}, [fetching, query, searchType]);

	useEffect(() => {
		onSearch();

		// eslint-disable-next-line
	}, [searchType, query]);

	const onSearch = (page = 1, isFetching = false) => {
		getSearchData({ page, query, searchType }).then(({ data: searchData }) => {
			updateState({
				...searchData,
				results: isFetching
					? [...data, ...searchData.results]
					: searchData.results,
			});

			setPage(page + 1);
		});
	};

	return (
		<>
			{data?.map((movie) => (
				<MovieCard key={movie.id} {...movie} />
			))}
		</>
	);
});
