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
	const [keywords, setKeywords] = useState([]);
	const { onChange, value } = useInput();
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

	const deleteKeyword = (keyword) => () => {
		const updatedKeywords = with_keywords.filter(
			(with_keyword) => with_keyword.id !== keyword.id
		);

		dispatch(
			onChangeFilters({
				name: 'with_keywords',
				value: updatedKeywords,
			})
		);
	};

	const addKeyword = (keyword) => () => {
		const isInWithKeywords = with_keywords.some(
			(with_keyword) => with_keyword.id === keyword.id
		);

		!isInWithKeywords &&
			dispatch(
				onChangeFilters({
					name: 'with_keywords',
					value: [...with_keywords, keyword],
				})
			);
	};

	return (
		<div>
			<FilterName>Ключевые слова</FilterName>
			<KeywordsWrapper>
				{with_keywords.map((keyword) => (
					<Keyword onClick={deleteKeyword(keyword)} checked key={keyword.id}>
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
					<Keyword onClick={addKeyword(keyword)} key={keyword.id}>
						{keyword.name}
					</Keyword>
				))}
			</KeywordsWrapper>
		</div>
	);
};
