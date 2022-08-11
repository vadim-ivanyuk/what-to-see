import { StyledWrapper, StyledContainer } from './index.style';

function Wrapper({ children }) {
	return <StyledWrapper>{children}</StyledWrapper>;
}

function Container({ children, justifyContent, alignItems }) {
	return (
		<StyledContainer justifyContent={justifyContent} alignItems={alignItems}>
			{children}
		</StyledContainer>
	);
}

export { Wrapper, Container };
