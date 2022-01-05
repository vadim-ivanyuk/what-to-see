import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { handleError, myAxios } from '../../helpers';

import { Container } from '../../theme/GlobalComponents';

export const ActorPage = () => {
	const { personId } = useParams();
	const [actor, setActor] = useState({});

	useEffect(() => {
		personId &&
			myAxios
				.get(`/person/${personId}`, { language: 'en-EN' })
				.then(({ data }) => {
					console.log(data);
					setActor(data);
				})
				.catch((error) => {
					handleError(error);
				});
	}, [personId]);

	return (
		<Container>
			<div>Hello World</div>
		</Container>
	);
};
