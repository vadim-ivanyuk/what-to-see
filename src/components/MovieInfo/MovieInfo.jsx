import React from 'react';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';

import { useMovies } from '../../store/selectors';

import { API_IMG_URL, API_IMG_URL_W1920 } from '../../utils/apies';
import { defaultPoster, defaultBackdropImage } from '../../img';

import {
	Wrapper,
	Background,
	BackgroundImage,
	SingleBlock,
	Container,
	Poster,
	PosterImage,
	Description,
	Title,
	TagLine,
	VoteAvarageContainer,
	VoteAvarage,
	VoteAvarageText,
	Paragraph,
	BoldText,
	OverviewTitle,
	Overview,
} from './MovieInfo.style';

const getValueFromArray = (arr = []) => {
	let resultArr = [];

	arr.forEach((item) => {
		resultArr.push(item.name);
	});

	return resultArr;
};

const getBackgropImage = (movie) => {
	if (!movie.backdrop_path) {
		return defaultBackdropImage;
	}

	return `${API_IMG_URL_W1920}${movie.backdrop_path}`;
};

const convertMovieVoteAvarage = (vote_average) => {
	return String(vote_average).length === 1 ? `${vote_average}.0` : vote_average;
};

export const MovieInfo = () => {
	const { movie } = useSelector(useMovies);

	return (
		<Wrapper>
			<Background>
				<BackgroundImage src={getBackgropImage(movie)} alt='' />
			</Background>
			<SingleBlock>
				<Container>
					<Poster>
						<PosterImage
							src={
								movie.poster_path
									? `${API_IMG_URL}${movie.poster_path}`
									: defaultPoster
							}
							alt=''
						/>
					</Poster>
					<Description>
						<Title>{movie.title || movie.name}</Title>
						{movie.tagline && <TagLine>{movie.tagline}</TagLine>}
						<VoteAvarageContainer>
							<VoteAvarage vote_average={movie.vote_average}>
								{convertMovieVoteAvarage(movie.vote_average)}
							</VoteAvarage>
							<VoteAvarageText>
								Пользовательский <br /> счёт
							</VoteAvarageText>
						</VoteAvarageContainer>
						<Paragraph>
							<BoldText>Статус</BoldText> - {movie.status}
						</Paragraph>
						<Paragraph>
							<BoldText>Дата выхода</BoldText> -{' '}
							{dayjs(movie.release_date).format('MMM DD YYYY')}
						</Paragraph>
						<Paragraph>
							<BoldText>Жанры</BoldText> -{' '}
							{getValueFromArray(movie.genres).join(', ')}
						</Paragraph>
						<Paragraph>
							<BoldText>Язык оригинала</BoldText> - {movie.original_language}
						</Paragraph>
						<Paragraph>
							<BoldText>Компания</BoldText> -{' '}
							{getValueFromArray(movie.production_companies).join(', ')}
						</Paragraph>
						<Paragraph>
							<BoldText>Страна</BoldText> -{' '}
							{getValueFromArray(movie.production_countries).join(', ')}
						</Paragraph>
						<OverviewTitle>Обзор</OverviewTitle>
						<Overview tagline={!!movie.tagline}>{movie.overview}</Overview>
					</Description>
				</Container>
			</SingleBlock>
		</Wrapper>
	);
};
