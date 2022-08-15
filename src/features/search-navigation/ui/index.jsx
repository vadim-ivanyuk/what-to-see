import { useSelector } from 'react-redux';

import { Typography, useSearchSelector } from 'shared';
import { useActions } from 'shared/lib/hooks';

import { searchTypes } from '../lib';
import {
	StyledSearchNavigation,
	StyledTitleContainer,
	StyledSearchType,
} from './index.style';

export const SearchNavigation = () => {
	const { setSearchType } = useActions();
	const { searchType } = useSelector(useSearchSelector);

	const handleClick = (searchType) => () => {
		setSearchType(searchType);
	};

	return (
		<StyledSearchNavigation>
			<StyledTitleContainer>
				<Typography
					title={'Searching results'}
					color={'orange'}
					size={'titleH2'}
				/>
			</StyledTitleContainer>
			<div>
				{searchTypes.map(({ type, title }, index) => (
					<StyledSearchType
						key={index}
						checked={type === searchType}
						onClick={handleClick(type)}
					>
						<Typography title={title} size={'titleH3'} color={'dark'} />
					</StyledSearchType>
				))}
			</div>
		</StyledSearchNavigation>
	);
};
