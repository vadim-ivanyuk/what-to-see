import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { onChangeFilters } from '../../../store/filters/filters.actions';
import { useFilters } from '../../../store/selectors';

import { Wrapper, MenuSubTitle } from '../MoviesMenu.style';

export const SubTypesList = ({ subTypeslist }) => {
	const dispatch = useDispatch();
	const { subType } = useSelector(useFilters);

	const onChangeSubType = (choosedType) => () => {
		if (subType !== choosedType) {
			dispatch(onChangeFilters({ name: 'subType', value: choosedType }));
		} else {
			dispatch(onChangeFilters({ name: 'subType', value: null }));
		}
	};

	return (
		<Wrapper>
			{subTypeslist.map((item) => (
				<MenuSubTitle
					key={item.id}
					onClick={onChangeSubType(item.id)}
					checked={item.id === subType}
				>
					{item.name}
				</MenuSubTitle>
			))}
		</Wrapper>
	);
};

SubTypesList.propTypes = {
	subTypeslist: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			id: PropTypes.string.isRequired,
		})
	),
};
