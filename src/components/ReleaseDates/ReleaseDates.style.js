import styled from 'styled-components';

export const Date = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 10px 0px;

	& span {
		font-weight: bold;
		font-size: 14px;
		padding-left: 5px;
	}

	& input {
		width: 85%;
	}
`;
