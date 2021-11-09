import { colorGreen, colorOrange, colorRed } from '../theme/colors';

export const addBorderForVoteAvarage = (voteAvarage = 0) => {
	if (voteAvarage >= 7) {
		return colorGreen;
	}
	if (voteAvarage >= 4 && voteAvarage < 7) {
		return colorOrange;
	}
	if (voteAvarage < 4) {
		return colorRed;
	}
};
