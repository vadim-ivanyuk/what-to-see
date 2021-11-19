export const getQueryParams = (params) => {
	const { releaseDates, with_keywords } = params;
	const [from, to] = releaseDates;

	return {
		...params,
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
	};
};
