import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { handleError, myAxios } from '../../helpers';
import { useFilters, useMovies } from '../../store/selectors';

import { BlockTitle } from '../AdditionalInfo/AdditionalInfo.style';
import { KeywordsList, KeywordsListItem } from './MovieKeywords.style';

export const MovieKeywords = () => {
	const [keywords, setKeywords] = useState([]);
	const { activeMovieId } = useSelector(useMovies);
	const { type } = useSelector(useFilters);

	useEffect(() => {
		if (activeMovieId) {
			myAxios
				.get(`/${type}/${activeMovieId}/keywords`)
				.then(({ data }) => {
					setKeywords(data.keywords || data.results || []);
				})
				.catch((error) => {
					handleError(error);
				});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeMovieId]);

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
