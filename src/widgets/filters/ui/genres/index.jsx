import React, { useEffect } from 'react';

import { Checkbox } from 'entities/checkbox';
import { useLazyGetGenresQuery } from 'shared/api/filters';
import { useActions } from 'shared/lib/hooks';
import { Typography } from 'shared';

import { StyledLabel, StyledGenres, StyledGenre } from './index.style';

export const Genres = React.memo(({ type, with_genres = [] }) => {
	const [getGenres, { data }] = useLazyGetGenresQuery();
	const { onChangeFilters } = useActions();

	useEffect(() => {
		getGenres({ type });

		// eslint-disable-next-line
	}, [type]);

	const handleClick = (id) => () => {
		const value = with_genres.includes(id)
			? with_genres.filter((with_genre) => with_genre !== id)
			: [...with_genres, id];

		onChangeFilters({ name: 'with_genres', value });
	};

	return (
		<StyledGenres>
			<StyledLabel>
				<Typography title={'Genres'} color={'dark'} size={'titleH3'} />
			</StyledLabel>
			{data?.map(({ id, name }) => (
				<StyledGenre onClick={handleClick(id)} key={id}>
					<Checkbox
						title={name}
						size={'titleH5'}
						checked={with_genres.includes(id)}
					/>
				</StyledGenre>
			))}
		</StyledGenres>
	);
});
