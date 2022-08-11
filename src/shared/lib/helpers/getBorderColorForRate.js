import { theme } from 'shared';

export const getBorderColorForRate = (vote_average = 0) =>
	(vote_average < 4 && theme.COLOR_RED) ||
	(vote_average > 4 && vote_average < 7 && theme.COLOR_ORANGE) ||
	(vote_average >= 7 && theme.COLOR_GREEN);
