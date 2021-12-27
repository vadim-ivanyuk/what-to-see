import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { myAxios } from '../../helpers';

export const ActorPage = () => {
	const { personId } = useParams();

	useEffect(() => {
		personId &&
			myAxios.get(`/person/${personId}`).then((data) => {
				console.log(data);
			});
	}, [personId]);

	return <div>Hello World</div>;
};
