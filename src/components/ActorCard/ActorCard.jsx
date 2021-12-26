import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { API_IMG_URL } from '../../utils/apies';
import { defaultPoster } from '../../img';

import {
	ActorCardWrapper,
	PosterImage,
	Description,
	RateActor,
	ActorName,
	Character,
} from './ActorCard.style';

export const ActorCard = ({ actor }) => {
	return (
		<ActorCardWrapper>
			<div>
				<Link to={`/actor/${actor.id}`}>
					<PosterImage
						src={
							actor.profile_path
								? `${API_IMG_URL}${actor.profile_path}`
								: defaultPoster
						}
						alt=''
					/>
				</Link>
			</div>
			<Description>
				<RateActor vote_average={actor.popularity}>
					{String(actor.popularity).substr(0, 3).replace('.', '')}
				</RateActor>
				<ActorName>
					<Link to={`/actor/${actor.id}`}>{actor.name}</Link>
				</ActorName>
				<Character>
					<b>Character</b>: {actor.character}
				</Character>
			</Description>
		</ActorCardWrapper>
	);
};

ActorCard.propTypes = {
	actor: PropTypes.shape({
		adult: PropTypes.bool,
		cast_id: PropTypes.number,
		character: PropTypes.string,
		credit_id: PropTypes.string,
		gender: PropTypes.number,
		id: PropTypes.number,
		known_for_department: PropTypes.string,
		name: PropTypes.string,
		order: PropTypes.number,
		original_name: PropTypes.string,
		popularity: PropTypes.number,
		profile_path: PropTypes.string,
	}),
};
