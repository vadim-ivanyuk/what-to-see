import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import { useFilters, useMovies } from '../../store/selectors';

import { handleError, myAxios } from '../../helpers';

import { facebook, instagram, twitter, imdb } from '../../img';

import { Container } from '../../theme/GlobalComponents';
import {
	Wrapper,
	FlexWrapper,
	Budget,
	BlockTitle,
	Keywords,
	Social,
	Paragraph,
	KeywordsList,
	KeywordsListItem,
	SocialLinks,
	SocialLinksItem,
} from './AdditionalInfo.style';

const numberWithCommas = (number) =>
	number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const AdditionalInfo = () => {
	const [keywords, setKeywords] = useState([]);
	const [socialLinks, setSocialLinks] = useState({});
	const { type } = useSelector(useFilters);
	const { activeMovieId, movie } = useSelector(useMovies);

	useEffect(() => {
		if (activeMovieId) {
			axios
				.all([
					myAxios.get(`/${type}/${activeMovieId}/keywords`),
					myAxios.get(`/${type}/${activeMovieId}/external_ids`),
				])
				.then((data) => {
					setKeywords(data[0].data.keywords || data[0].data.results || []);
					setSocialLinks(data[1].data);
				})
				.catch((error) => {
					handleError(error);
				});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeMovieId]);

	return (
		<Wrapper>
			<Container>
				<FlexWrapper>
					<Budget>
						<BlockTitle>More Info</BlockTitle>
						<Paragraph>
							<strong>Бюджет:</strong> ${numberWithCommas(movie.budget || 0)}
						</Paragraph>
						<Paragraph>
							<strong>Сборы:</strong> ${numberWithCommas(movie.revenue || 0)}
						</Paragraph>
						<Paragraph>
							<strong>Продолжительность:</strong> {movie.runtime}m
						</Paragraph>
						<Paragraph>
							<a
								href={movie.homepage}
								target='_blank'
								rel='noopener noreferrer'
							>
								Посетить домашнюю страницу
							</a>
						</Paragraph>
					</Budget>
					<Keywords>
						<BlockTitle>Keywords</BlockTitle>
						<KeywordsList>
							{keywords.map((keyword) => (
								<KeywordsListItem key={keyword.id}>
									{keyword.name}
								</KeywordsListItem>
							))}
						</KeywordsList>
					</Keywords>
					<Social>
						<BlockTitle>Social links</BlockTitle>
						<SocialLinks>
							<SocialLinksItem>
								<a
									href={`https://www.facebook.com/${socialLinks.facebook_id}`}
									target='_blank'
									rel='noopener noreferrer'
								>
									<img src={facebook} alt='facebook icon' />
								</a>
							</SocialLinksItem>
							<SocialLinksItem>
								<a
									href={`https://www.instagram.com/${socialLinks.instagram_id}`}
									target='_blank'
									rel='noopener noreferrer'
								>
									<img src={instagram} alt='instagram icon' />
								</a>
							</SocialLinksItem>
							<SocialLinksItem>
								<a
									href={`https://twitter.com/${socialLinks.twitter_id}`}
									target='_blank'
									rel='noopener noreferrer'
								>
									<img src={twitter} alt='twitter icon' />
								</a>
							</SocialLinksItem>
							<SocialLinksItem>
								<a
									href={`https://www.imdb.com/title/${socialLinks.imdb_id}`}
									target='_blank'
									rel='noopener noreferrer'
								>
									<img src={imdb} alt='imdb icon' />
								</a>
							</SocialLinksItem>
						</SocialLinks>
					</Social>
				</FlexWrapper>
			</Container>
		</Wrapper>
	);
};
