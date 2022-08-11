import { theme } from 'shared/lib';

const colors = {
	black: theme.COLOR_BLACK,
	dark: theme.COLOR_DARK,
	green: theme.COLOR_GREEN,
	orange: theme.COLOR_ORANGE,
	red: theme.COLOR_RED,
	white: theme.COLOR_WHITE,
};

export const getColor = (color) => {
	return colors[color] ?? theme.COLOR_WHITE;
};
