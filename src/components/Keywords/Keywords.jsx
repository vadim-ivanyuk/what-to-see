import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { handleError, myAxios } from '../../helpers';

import { useInput } from '../../hooks';
import { useFilters } from '../../store/selectors';
import { onChangeFilters } from '../../store/filters/filters.actions';

import { Input } from '../Input';

import { FilterName } from '../Filters/Filters.style';
import { KeywordsWrapper, WrapperInput, Keyword } from './Keywords.style';

export const Keywords = () => {
	const { onChange, value } = useInput();
	const [keywords, setKeywords] = useState([]);
	const { with_keywords } = useSelector(useFilters);
	const dispatch = useDispatch();

	useEffect(() => {
		if (value.length > 0) {
			myAxios
				.get('/search/keyword', { query: value })
				.then(({ data }) => {
					setKeywords(data.results);
				})
				.catch((error) => {
					handleError(error);
				});
		} else {
			setKeywords([]);
		}
	}, [value]);

	const handleClick = (keyword) => () => {
		let updatedWithKeywods = [];
		const isInWithKeywords = with_keywords.some(
			(with_keyword) => with_keyword.id === keyword.id
		);

		if (isInWithKeywords) {
			updatedWithKeywods = with_keywords.filter(
				(with_keyword) => with_keyword.id !== keyword.id
			);
		} else {
			updatedWithKeywods = [...with_keywords, keyword];
		}

		dispatch(
			onChangeFilters({
				name: 'with_keywords',
				value: updatedWithKeywods,
			})
		);
	};

	return (
		<div>
			<FilterName>Ключевые слова</FilterName>
			<KeywordsWrapper>
				{with_keywords.map((keyword) => (
					<Keyword checked onClick={handleClick(keyword)} key={keyword.id}>
						{keyword.name}
					</Keyword>
				))}
			</KeywordsWrapper>
			<WrapperInput>
				<Input
					onChange={onChange}
					value={value}
					placeholder={'Фильтровать по ключевым словам'}
				/>
			</WrapperInput>
			<KeywordsWrapper>
				{keywords.map((keyword) => (
					<Keyword onClick={handleClick(keyword)} key={keyword.id}>
						{keyword.name}
					</Keyword>
				))}
			</KeywordsWrapper>
		</div>
	);
};
