const sizes = {
	titleH1: '30px',
	titleH2: '24px',
	titleH3: '18px',
	titleH4: '16px',
	titleH5: '14px',
};

export const getSize = (size) => {
	return sizes[size] ?? sizes['titleH4'];
};
