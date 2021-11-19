import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { API_YOUTUBE_EMBED_URL } from '../../utils/apies';
import { handleError, myAxios } from '../../helpers';

import { useFilters } from '../../store/selectors';

import { Player } from '../Player';
import { Title } from '../Title';
import { Loader } from '../Loader';

import { Container } from '../../theme/GlobalComponents';
import {
	FlexWrapper,
	CurrentTrailerWrapper,
	TrailersList,
	IframeListItemWrapper,
	IframeListItem,
	IrameListItemOverBlock,
	LoadMore,
} from './Trailers.style';

export const Trailers = ({ activeId }) => {
	const [trailers, setTrailers] = useState([]);
	const [activeTrailer, setActiveTrailer] = useState(0);
	const [availableTrailers, setavailableTrailers] = useState(4);
	const { type } = useSelector(useFilters);

	useEffect(() => {
		if (activeId) {
			myAxios
				.get(`/${type}/${activeId}/videos`, {
					language: 'ru-RU,en-EN',
				})
				.then(({ data }) => {
					setTrailers([...data.results]);
				})
				.catch((error) => {
					handleError(error);
				});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeId]);

	const changeActiveTrailer = (key) => () => {
		setActiveTrailer(key);
	};

	const changeAvailableTrailers = () => {
		setavailableTrailers(trailers.length);
	};

	const currentTrailer = trailers.map((trailer, index) => {
		return (
			<Fragment key={trailer.key}>
				{index === activeTrailer && (
					<Fragment>
						<Player id={trailer.key} autoplay={1} />
					</Fragment>
				)}
			</Fragment>
		);
	});

	const trailersList = trailers.map((trailer, index) => {
		return (
			<Fragment key={trailer.key}>
				{index !== activeTrailer && index < availableTrailers && (
					<IframeListItemWrapper>
						<IframeListItem
							src={`${API_YOUTUBE_EMBED_URL}${trailer.key}`}
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						></IframeListItem>
						<IrameListItemOverBlock
							onClick={changeActiveTrailer(index)}
						></IrameListItemOverBlock>
					</IframeListItemWrapper>
				)}
			</Fragment>
		);
	});

	return (
		<Container>
			<Title text={'Trailers'} />
			{trailers.length > 0 ? (
				<FlexWrapper>
					<CurrentTrailerWrapper trailersLength={trailers.length}>
						{currentTrailer}
					</CurrentTrailerWrapper>
					{trailers.length > 1 && (
						<TrailersList>
							{trailersList}
							{trailers.length > availableTrailers && (
								<LoadMore onClick={changeAvailableTrailers}>load more</LoadMore>
							)}
						</TrailersList>
					)}
				</FlexWrapper>
			) : (
				<FlexWrapper>
					<Loader />
				</FlexWrapper>
			)}
		</Container>
	);
};

Trailers.propTypes = {
	activeId: PropTypes.string.isRequired,
};
