import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { myAxios, handleError } from '../../helpers';

import { MainInfo } from '../../components/MainInfo';
import { Trailers } from '../../components/Trailers';
import { Actors } from '../../components/Actors';
import { AdditionalInfo } from '../../components/AdditionalInfo';
import { SimilarMovies } from '../../components/SimilarMovies';

export const TvPage = () => {
	const [tv, setTv] = useState({});
	const { tvId } = useParams();

	useEffect(() => {
		getTv();

		document.querySelector('#header').scrollIntoView({
			behavior: 'smooth',
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tvId]);

	const getTv = () => {
		myAxios
			.get(`/tv/${tvId}`)
			.then(({ data }) => {
				setTv(data);
			})
			.catch((error) => {
				handleError(error);
			});
	};

	return (
		<div>
			<MainInfo info={tv} />
			<Trailers activeId={tvId} />
			<Actors activeId={tvId} />
			<AdditionalInfo info={tv} />
			<SimilarMovies activeId={tvId} />
		</div>
	);
};
