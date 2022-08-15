import React, { useCallback } from 'react';

import { Select } from 'shared';
import { useActions } from 'shared/lib/hooks';

import { sortOptions } from '../config';

export const SortBy = React.memo(({ sort_by }) => {
	const { onChangeFilters } = useActions();

	const handleChange = useCallback(({ target }) => {
		const { name, value } = target;

		onChangeFilters({ name, value });

		// eslint-disable-next-line
	}, []);

	return (
		<div>
			<Select
				handleChange={handleChange}
				value={sort_by}
				name={'sort_by'}
				options={sortOptions}
			/>
		</div>
	);
});
