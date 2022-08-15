import React, { useState, useEffect, useCallback } from 'react';

import { Movies } from './movies';
import { Search } from './search';

const DynamicPagination = ({ children }) => {
	const [fetching, setFetching] = useState(true);
	const [totalPages, setTotalPages] = useState(1);
	const [data, setData] = useState([]);

	useEffect(() => {
		document.addEventListener('scroll', handleScroll);

		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const updateState = useCallback((loadedData) => {
		setData(loadedData?.results ?? data);
		setFetching(false);
		setTotalPages(loadedData?.total_pages ?? totalPages);

		// eslint-disable-next-line
	}, []);

	const handleScroll = ({ target }) => {
		const { scrollHeight, scrollTop } = target.documentElement;
		const isBottom = scrollHeight - (scrollTop + window.innerHeight) < 300;

		if (isBottom) {
			setFetching(true);
		}
	};

	const childrenWithProps = React.Children.map(children, (child) => {
		if (React.isValidElement(child)) {
			return React.cloneElement(child, {
				data,
				fetching,
				updateState,
			});
		}
		return child;
	});

	return childrenWithProps;
};

DynamicPagination.Movies = Movies;
DynamicPagination.Search = Search;

export { DynamicPagination };
