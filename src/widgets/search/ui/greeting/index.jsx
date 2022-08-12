import { Typography, Logo } from 'shared';

export const Greeting = () => {
	return (
		<div>
			<Typography title={<Logo />} size={'titleH1'} isLineHeight />
			<Typography
				title={
					'This resource is intended for searching movies, actors and TV series.'
				}
				size={'titleH3'}
				isLineHeight
				isLetterSpacing
			/>
		</div>
	);
};
