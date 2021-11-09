import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
	API_YOUTUBE_URL,
	API_YOUTUBE_HOST_URL,
	API_YOUTUBE_EMBED_URL,
} from '../../utils/apies';
import { Loader } from '../Loader';

import { PlayerContainer, LoaderWrapper } from './Player.style';

export const Player = ({ id }) => {
	const [readyTrailer, setReadyTrailer] = useState(false);

	const loadVideo = useCallback(() => {
		new window.YT.Player(`player-${id}`, {
			videoId: id,
			host: API_YOUTUBE_HOST_URL,
			playerVars: {
				iv_load_policy: 3,
				// autoplay,
				loop: 1,
				playlist: id,
				modestbranding: 1,
				showinfo: 0,
				rel: 0,
			},
			events: {
				onReady: onPlayerReady,
			},
		});
	}, [id]);

	useEffect(() => {
		if (!window.YT) {
			const tag = document.createElement('script');
			tag.src = API_YOUTUBE_URL;

			window.onYouTubeIframeAPIReady = loadVideo;

			const firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		} else {
			loadVideo();
		}
	}, [id, loadVideo]);

	const onPlayerReady = () => {
		setReadyTrailer(true);
	};

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
			></iframe>
			{!readyTrailer && (
				<LoaderWrapper>
					<Loader />
				</LoaderWrapper>
			)}
		</PlayerContainer>
	);
};

Player.propTypes = {
	id: PropTypes.string.isRequired,
};
