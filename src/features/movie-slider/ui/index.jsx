import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

import { MovieCard } from 'entities/movie-card';

import { config } from '../config';

SwiperCore.use([Pagination]);

export function MovieSlider({ movies }) {
	return (
		<Swiper {...config}>
			{movies?.map((movie) => (
				<SwiperSlide key={movie.id} virtualIndex={movie.id}>
					<MovieCard {...movie} />
				</SwiperSlide>
			))}
		</Swiper>
	);
}
