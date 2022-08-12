export const getSearchQuery = (url = '') => {
	const query = url.split('query=');

	return query[1] ?? '';
};
