import React from 'react';
import { useSelector } from 'react-redux';

import { useMovies } from '../../store/selectors';

import { BlockTitle } from '../AdditionalInfo/AdditionalInfo.style';
import { Paragraph } from './MoreInfo.style';

const numberWithCommas = (number) =>
	number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const MoreInfo = () => {
	const { movie } = useSelector(useMovies);

	return (
		<>
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
				<a href={movie.homepage} target='_blank' rel='noopener noreferrer'>
					Посетить домашнюю страницу
				</a>
			</Paragraph>
		</>
	);
};
