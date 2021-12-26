export const getQueryParams = (params) => {
	const {
		page,
		sort_by,
		type,
		subType,
		releaseDates,
		with_keywords,
		with_runtime,
		with_genres,
		vote_average,
	} = params;
	const [from, to] = releaseDates;
	const [minRuntime, maxRuntime] = with_runtime;
	const [minVote, maxVote] = vote_average;

	return {
		page,
		sort_by,
		type,
		subType,
		with_keywords: with_keywords
			.map((with_keyword) => with_keyword.id)
			.join(','),
		'air_date.gte': from,
		'air_date.lte': to,
		'first_air_date.gte': from,
		'first_air_date.lte': to,
		'release_date.gte': from,
		'release_date.lte': to,
		'primary_release_date.gte': from,
		'primary_release_date.lte': to,
		'with_runtime.gte': minRuntime,
		'with_runtime.lte': maxRuntime,
		with_genres,
		'vote_average.gte': minVote,
		'vote_average.lte': maxVote,
	};
};
