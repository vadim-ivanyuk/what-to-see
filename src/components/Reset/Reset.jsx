import React from 'react';
import { useDispatch } from 'react-redux';

import { resetFilters } from '../../store/filters/filters.actions';

import { Button } from '../Button';

import { Wrapper } from './Reset.style';

export const Reset = () => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(resetFilters());
	};

	return (
		<Wrapper>
			<Button text={'Сбросить фильтры'} handleClick={handleClick} />
		</Wrapper>
	);
};
