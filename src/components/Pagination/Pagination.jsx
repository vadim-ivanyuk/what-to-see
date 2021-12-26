import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { useFilters } from '../../store/selectors';
import { onChangeFilters } from '../../store/filters/filters.actions';

import { Button } from '../Button';

import { Wrapper, PaginationWrapper } from './Pagination.style';

export const Pagination = ({ totalPages, scrollAnchor }) => {
	const { page } = useSelector(useFilters);
	const dispatch = useDispatch();

	const scrollToHomeMenu = () => {
		document.querySelector(`#${scrollAnchor}`).scrollIntoView({
			behavior: 'smooth',
		});
	};

	const incrementPage = () => {
		dispatch(onChangeFilters({ name: 'page', value: page + 1 }));

		scrollToHomeMenu();
	};

	const decrementPage = () => {
		dispatch(onChangeFilters({ name: 'page', value: page - 1 }));

		scrollToHomeMenu();
	};

	return (
		<Wrapper>
			<Button disabled={page === 1} text={'Prev'} handleClick={decrementPage} />
			<PaginationWrapper>
				{page} из {totalPages}
			</PaginationWrapper>
			<Button
				disabled={page === totalPages}
				text={'Next'}
				handleClick={incrementPage}
			/>
		</Wrapper>
	);
};

Pagination.propTypes = {
	totalPages: PropTypes.number,
	scrollAnchor: PropTypes.string,
};
