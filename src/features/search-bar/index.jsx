import { useHistory, useLocation } from 'react-router-dom';
import { useInput } from 'shared/lib/hooks';
import { Input, Button } from 'shared/ui';

import { StyledContainer } from './index.style';

export function SearchBar() {
	const { search } = useLocation();
	const history = useHistory();
	const searchInput = useInput(search.split('=')[1] ?? '');

	const onSearch = (e) => {
		e.preventDefault();

		history.push(`/search?query=${searchInput.value}`);
	};

	return (
		<StyledContainer>
			<Input {...searchInput} placeholder={'Type something...'} />
			<Button
				text={'Search'}
				disabled={!searchInput.value}
				handleClick={onSearch}
			/>
		</StyledContainer>
	);
}
