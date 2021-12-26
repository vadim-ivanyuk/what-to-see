import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import './slider.css';

import { Card } from '../Card/Card';

SwiperCore.use([Pagination]);

export const Slider = ({ list, cardType }) => {
	return (
		<Swiper
			grabCursor={true}
			slidesPerView={1}
			pagination={{
				clickable: true,
				dynamicBullets: true,
			}}
			breakpoints={{
				400: {
					slidesPerView: 2,
				},
				600: {
					slidesPerView: 3,
				},
				800: {
					slidesPerView: 4,
				},
				1000: {
					slidesPerView: 5,
				},
				1200: {
					slidesPerView: 6,
				},
			}}
			className='slider'
		>
			{list.map((listItem, index) => (
				<SwiperSlide key={listItem.id} virtualIndex={index}>
					<Card list={listItem} cardType={cardType} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

Slider.propTypes = {
	cardType: PropTypes.string,
	list: PropTypes.arrayOf(
		PropTypes.shape({
			adult: PropTypes.bool,
			backdrop_path: PropTypes.string,
			genre_ids: PropTypes.array,
			original_language: PropTypes.string,
			original_title: PropTypes.string,
			overview: PropTypes.string,
			popularity: PropTypes.number,
			poster_path: PropTypes.string,
			release_date: PropTypes.string,
			title: PropTypes.string,
			video: PropTypes.bool,
			vote_average: PropTypes.number,
			vote_count: PropTypes.number,
		})
	),
};
