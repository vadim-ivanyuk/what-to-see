import { Checkbox } from 'entities/checkbox';

import { StyledCheckboxesContainer } from './index.style';

export const CheckboxesGroup = ({ timeWindow, handleChangeTimeWindow }) => {
	return (
		<StyledCheckboxesContainer onClick={handleChangeTimeWindow}>
			<Checkbox title={'Today'} checked={timeWindow === 'day'} />
			<Checkbox title={'This week'} checked={timeWindow === 'week'} />
		</StyledCheckboxesContainer>
	);
};
