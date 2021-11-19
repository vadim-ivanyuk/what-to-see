import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { Input } from '../Input';
import { Button } from '../Button';

import { useInput } from '../../hooks';

import { searchImage } from '../../img';

import { Container } from '../../theme/GlobalComponents';
import {
	Wrapper,
	SearchWrapper,
	Image,
	AboveImage,
	Title,
	SubTitle,
	SearchInputWrapper,
} from './Search.style';

export const Search = () => {
	const { search } = useLocation();
	const [, searchParams] = search.split('=');
	const searchInput = useInput(decodeURI(searchParams));
	const history = useHistory();

	const onSubmit = (e) => {
		e.preventDefault();

		history.push(`/search?query=${searchInput.value}`);
	};

	return (
		<Wrapper>
			<Container>
				<SearchWrapper>
					<Image src={searchImage} alt='' />
					<AboveImage>
						<div>
							<Title>
								Добро пожаловать на "What <span>to see?"</span>
							</Title>
							<SubTitle>
								Данный ресурс предназначен для поиска фильмов, акётров и
								сериалов.
							</SubTitle>
						</div>
						<SearchInputWrapper onSubmit={onSubmit}>
							<Input
								{...searchInput}
								placeholder={'Найти фильмы, актёров, сериалы...'}
							/>
							<Button handleClick={onSubmit} type='submit' text={'Искать'} />
						</SearchInputWrapper>
					</AboveImage>
				</SearchWrapper>
			</Container>
		</Wrapper>
	);
};
