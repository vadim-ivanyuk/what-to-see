import { useSelector } from 'react-redux';

import { Checkbox } from 'entities/checkbox';
import { useContentSelector } from 'shared';
import { useActions } from 'shared/lib/hooks';

import { contentTypes } from '../config';
import { StyledHomeNavigation, StyledCheckboxContainer } from './index.style';

export const HomeNavigation = () => {
	const type = useSelector(useContentSelector);
	const { onChangeType } = useActions();

	const handleClick = (type) => () => {
		onChangeType(type);
	};

	return (
		<StyledHomeNavigation>
			{contentTypes.map(({ contentType, title }, index) => (
				<StyledCheckboxContainer key={index} onClick={handleClick(contentType)}>
					<Checkbox
						title={title}
						size={'titleH3'}
						checked={contentType === type}
					/>
				</StyledCheckboxContainer>
			))}
		</StyledHomeNavigation>
	);
};
