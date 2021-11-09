import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useFilters, useMovies } from '../../store/selectors';

import { handleError, myAxios } from '../../helpers';

import { facebook, instagram, twitter, imdb } from '../../img';

import { BlockTitle } from '../AdditionalInfo/AdditionalInfo.style';
import { SocialLinks, SocialLinksItem } from './Social.style';

export const Social = () => {
	const [socialLinks, setSocialLinks] = useState({});
	const { type } = useSelector(useFilters);
	const { activeMovieId } = useSelector(useMovies);

	useEffect(() => {
		if (activeMovieId) {
			myAxios
				.get(`/${type}/${activeMovieId}/external_ids`)
				.then(({ data }) => {
					setSocialLinks(data);
				})
				.catch((error) => {
					handleError(error);
				});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeMovieId]);

	return (
		<>
			<BlockTitle>Social links</BlockTitle>
			<SocialLinks>
				<SocialLinksItem>
					<a
						href={`https://www.facebook.com/${socialLinks.facebook_id}`}
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={facebook} alt='facebook icon' />
					</a>
				</SocialLinksItem>
				<SocialLinksItem>
					<a
						href={`https://www.instagram.com/${socialLinks.instagram_id}`}
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={instagram} alt='instagram icon' />
					</a>
				</SocialLinksItem>
				<SocialLinksItem>
					<a
						href={`https://twitter.com/${socialLinks.twitter_id}`}
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={twitter} alt='twitter icon' />
					</a>
				</SocialLinksItem>
				<SocialLinksItem>
					<a
						href={`https://www.imdb.com/title/${socialLinks.imdb_id}`}
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={imdb} alt='imdb icon' />
					</a>
				</SocialLinksItem>
			</SocialLinks>
		</>
	);
};
