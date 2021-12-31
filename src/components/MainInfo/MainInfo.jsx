import React from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

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
} from './MainInfo.style';

const getNameFromArray = (arr = []) => arr.map((item) => item.name).join(', ');

const getBackgropImage = (info = {}) => {
	return info.backdrop_path
		? `${API_IMG_URL_W1920}${info.backdrop_path}`
		: defaultBackdropImage;
};

const convertMovieVoteAvarage = (vote_average) => {
	return String(vote_average).length === 1 ? `${vote_average}.0` : vote_average;
};

export const MainInfo = ({ info = {} }) => {
	return (
		<Wrapper>
			<Background>
				<BackgroundImage src={getBackgropImage(info)} alt='' />
			</Background>
			<SingleBlock>
				<Container>
					<Poster>
						<PosterImage
							src={
								info.poster_path
									? `${API_IMG_URL}${info.poster_path}`
									: defaultPoster
							}
							alt=''
						/>
					</Poster>
					<Description>
						<Title>{info.title || info.name}</Title>
						{info.tagline && <TagLine>{info.tagline}</TagLine>}
						<VoteAvarageContainer>
							<VoteAvarage vote_average={info.vote_average}>
								{convertMovieVoteAvarage(info.vote_average)}
							</VoteAvarage>
							<VoteAvarageText>
								Пользовательский <br /> счёт
							</VoteAvarageText>
						</VoteAvarageContainer>
						<Paragraph>
							<BoldText>Статус - </BoldText>
							{info.status}
						</Paragraph>
						<Paragraph>
							<BoldText>Дата выхода - </BoldText>
							{dayjs(info.release_date).format('MMM DD YYYY')}
						</Paragraph>
						<Paragraph>
							<BoldText>Жанры - </BoldText>
							{getNameFromArray(info.genres)}
						</Paragraph>
						<Paragraph>
							<BoldText>Язык оригинала - </BoldText>
							{info.original_language}
						</Paragraph>
						<Paragraph>
							<BoldText>Компания - </BoldText>
							{getNameFromArray(info.production_companies)}
						</Paragraph>
						<Paragraph>
							<BoldText>Страна - </BoldText>
							{getNameFromArray(info.production_countries)}
						</Paragraph>
						<OverviewTitle>Обзор</OverviewTitle>
						<Overview tagline={!!info.tagline}>{info.overview}</Overview>
					</Description>
				</Container>
			</SingleBlock>
		</Wrapper>
	);
};

MainInfo.propTypes = {
	info: PropTypes.shape({
		poster_path: PropTypes.string,
		title: PropTypes.string,
		name: PropTypes.string,
		tagline: PropTypes.string,
		vote_average: PropTypes.number,
		status: PropTypes.string,
		release_date: PropTypes.string,
		genres: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number,
				name: PropTypes.string,
			})
		),
		original_language: PropTypes.string,
		production_companies: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.namber,
				name: PropTypes.string,
			})
		),
		production_countries: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.namber,
				name: PropTypes.string,
			})
		),
		overview: PropTypes.string,
	}),
};
