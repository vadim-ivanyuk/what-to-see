import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import './slider.css';

import { MovieCard } from '../MovieCard';

SwiperCore.use([Pagination]);

export const Slider = ({ moviesList }) => {
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
			{moviesList.map((movieListItem, index) => (
				<SwiperSlide key={movieListItem.id} virtualIndex={index}>
					<MovieCard movie={movieListItem} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

Slider.propTypes = {
	moviesList: PropTypes.arrayOf(
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
