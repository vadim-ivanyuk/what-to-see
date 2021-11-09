import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { myAxios, handleError } from '../../helpers';

import { useFilters } from '../../store/selectors';
import { onChangeFilters } from '../../store/filters/filters.actions';

import { FilterName } from '../Filters/Filters.style';

import { GenreItem, GenresWrapper } from './Genres.style';
import { useDispatch } from 'react-redux';

export const Genres = () => {
	const [genresList, setGenresList] = useState([]);
	const { type, with_genres = [] } = useSelector(useFilters);
	const dispatch = useDispatch();

	useEffect(() => {
		myAxios
			.get(`/genre/${type}/list`)
			.then(({ data }) => {
				setGenresList(data.genres);
			})
			.catch((error) => {
				handleError(error);
			});
	}, [type]);

	const handleClick = (choosedGenre) => () => {
		let updatedGenres = [];

		if (with_genres.includes(choosedGenre)) {
			updatedGenres = with_genres.filter((genre) => genre !== choosedGenre);
		} else {
			updatedGenres = [...with_genres, choosedGenre];
		}

		dispatch(onChangeFilters({ name: 'with_genres', value: updatedGenres }));
	};

	return (
		<div>
			<FilterName>Жанры</FilterName>
			<GenresWrapper>
				{genresList.map((genre) => (
					<GenreItem
						onClick={handleClick(genre.id)}
						checked={with_genres.includes(genre.id)}
						key={genre.id}
					>
						{genre.name}
					</GenreItem>
				))}
			</GenresWrapper>
		</div>
	);
};
