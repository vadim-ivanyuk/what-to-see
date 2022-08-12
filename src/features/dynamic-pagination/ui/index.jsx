import React, { useState, useEffect } from 'react';

import { MovieCard } from 'entities/movie-card';

const DynamicPagination = ({ children, getData }) => {
	const [data, setData] = useState([]);
	const [fetching, setFetching] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		if (fetching) {
			getData(currentPage).then(({ data: newData }) => {
				setData([...data, ...newData]);
				setCurrentPage((prevPage) => prevPage + 1);
				setFetching(false);
			});
		}
	}, [fetching]);

	useEffect(() => {
		document.addEventListener('scroll', handleScroll);

		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleScroll = ({ target }) => {
		const { scrollHeight, scrollTop } = target.documentElement;
		const isBottom = scrollHeight - (scrollTop + window.innerHeight) < 100;

		if (isBottom) {
			setFetching(true);
		}
	};

	const childrenWithProps = React.Children.map(children, (child) => {
		if (React.isValidElement(child)) {
			return React.cloneElement(child, { data });
		}
		return child;
	});

	return childrenWithProps;
};

DynamicPagination.Movies = React.memo(({ data }) => {
	return (
		<>
			{data?.map((movie) => (
				<MovieCard key={movie.id} {...movie} />
			))}
		</>
	);
});

export { DynamicPagination };
