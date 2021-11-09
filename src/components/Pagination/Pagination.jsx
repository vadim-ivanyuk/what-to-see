import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useFilters, useMovies } from '../../store/selectors';
import { onChangePage } from '../../store/filters/filters.actions';

import { Button } from '../Button';

import { Wrapper, PaginationWrapper } from './Pagination.style';

export const Pagination = () => {
	const { page, total_pages } = useSelector(useFilters);
	const { currentMovies } = useSelector(useMovies);
	const dispatch = useDispatch();

	const incrementPage = () => {
		dispatch(onChangePage(page + 1));
	};

	const decrementPage = () => {
		dispatch(onChangePage(page - 1));
	};

	return (
		<>
			{currentMovies.length ? (
				<Wrapper>
					<Button
						disabled={page === 1}
						text={'Назад'}
						handleClick={decrementPage}
					/>
					<PaginationWrapper>
						{page} из {total_pages}
					</PaginationWrapper>
					<Button
						disabled={page === total_pages}
						text={'Вперед'}
						handleClick={incrementPage}
					/>
				</Wrapper>
			) : null}
		</>
	);
};
