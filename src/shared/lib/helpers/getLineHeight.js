const lineHeights = {
	titleH1: '60px',
	titleH2: '40px',
	titleH3: '30px',
	titleH4: '20x',
};

export const getLineHeight = (size) => {
	return lineHeights[size] ?? lineHeights['titleH2'];
};
