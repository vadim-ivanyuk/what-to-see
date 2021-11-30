import React from 'react';
import PropTypes from 'prop-types';

import { API_YOUTUBE_EMBED_URL } from '../../utils/apies';

import { PlayerContainer } from './Player.style';

export const Player = ({ id }) => {
	return (
		<PlayerContainer>
			<iframe
				id={`player-${id}`}
				title={`player-${id}`}
				type='text/html'
				width='100%'
				height='100%'
				src={`${API_YOUTUBE_EMBED_URL}${id}?enablejsapi=1&origin=${document.location.origin}`}
				frameBorder='0'
				allowFullScreen
			></iframe>
		</PlayerContainer>
	);
};

Player.propTypes = {
	id: PropTypes.string.isRequired,
};
