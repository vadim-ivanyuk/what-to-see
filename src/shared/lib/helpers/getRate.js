export const getRate = (vote_avarage = '') => {
	const [whole] = String(vote_avarage).split('.');

	return whole;
};
