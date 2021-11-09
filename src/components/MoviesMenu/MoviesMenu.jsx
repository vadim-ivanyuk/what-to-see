import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { onChangeFilters } from '../../store/filters/filters.actions';
import { useFilters } from '../../store/selectors';

import { movieSubTypes, tvSubTypes } from './subTypes';

import { SubTypesList } from './SubTypesList';

import { MoviesMenuWrapper, Wrapper, MenuTitle } from './MoviesMenu.style';

export const MoviesMenu = () => {
	const { type } = useSelector(useFilters);
	const dispatch = useDispatch();

	const onChangeType = (choosedType) => () => {
		if (type !== choosedType) {
			dispatch(onChangeFilters({ name: 'type', value: choosedType }));
		}
	};

	return (
		<MoviesMenuWrapper>
			<Wrapper>
				<MenuTitle checked={type === 'movie'} onClick={onChangeType('movie')}>
					Фильмы
				</MenuTitle>
				<MenuTitle checked={type === 'tv'} onClick={onChangeType('tv')}>
					Сериалы
				</MenuTitle>
			</Wrapper>
			{type === 'movie' && <SubTypesList subTypeslist={movieSubTypes} />}
			{type === 'tv' && <SubTypesList subTypeslist={tvSubTypes} />}
		</MoviesMenuWrapper>
	);
};
