import React from 'react';

import { BlockTitle } from '../AdditionalInfo/AdditionalInfo.style';
import { Paragraph } from './MoreInfo.style';

const numberWithCommas = (number) =>
	number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const MoreInfo = ({ info }) => {
	return (
		<>
			<BlockTitle>More Info</BlockTitle>
			<Paragraph>
				<strong>Бюджет:</strong> ${numberWithCommas(info.budget || 0)}
			</Paragraph>
			<Paragraph>
				<strong>Сборы:</strong> ${numberWithCommas(info.revenue || 0)}
			</Paragraph>
			<Paragraph>
				<strong>Продолжительность:</strong>{' '}
				{info.runtime || info.episode_run_time}m
			</Paragraph>
			<Paragraph>
				<a href={info.homepage} target='_blank' rel='noopener noreferrer'>
					Посетить домашнюю страницу
				</a>
			</Paragraph>
		</>
	);
};
