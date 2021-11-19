import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { handleError, myAxios } from '../../helpers';
import { useFilters } from '../../store/selectors';

import { BlockTitle } from '../AdditionalInfo/AdditionalInfo.style';
import { KeywordsList, KeywordsListItem } from './MovieKeywords.style';

export const MovieKeywords = ({ activeId }) => {
	const [keywords, setKeywords] = useState([]);
	const { type } = useSelector(useFilters);

	useEffect(() => {
		if (activeId) {
			myAxios
				.get(`/${type}/${activeId}/keywords`)
				.then(({ data }) => {
					setKeywords(data.keywords || data.results || []);
				})
				.catch((error) => {
					handleError(error);
				});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeId]);

	return (
		<>
			<BlockTitle>Keywords</BlockTitle>
			<KeywordsList>
				{keywords.map((keyword) => (
					<KeywordsListItem key={keyword.id}>{keyword.name}</KeywordsListItem>
				))}
			</KeywordsList>
		</>
	);
};
