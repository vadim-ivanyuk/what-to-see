import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { MovieCard } from 'entities/movie-card';
import { useLazyGetMoviesQuery } from 'shared/api/movies';
import { useContentSelector, useFiltersSelector } from 'shared';

export const Movies = React.memo(({ data, fetching, updateState }) => {
	const [getMovies] = useLazyGetMoviesQuery();
	const [page, setPage] = useState(1);
	const filters = useSelector(useFiltersSelector);
	const type = useSelector(useContentSelector);

	useEffect(() => {
		if (fetching) {
			gettingMovies(page, fetching);
		}

		// eslint-disable-next-line
	}, [fetching]);

	useEffect(() => {
		gettingMovies();

		// eslint-disable-next-line
	}, [filters, type]);

	const gettingMovies = (page = 1, isFetching = false) => {
		getMovies({ page, type, filters }).then(({ data: moviesData }) => {
			updateState({
				...moviesData,
				results: isFetching
					? [...data, ...moviesData.results]
					: moviesData.results,
			});

			setPage((prevPage) => prevPage + 1);
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
