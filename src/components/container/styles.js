import { styled } from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	@media (max-width: 900px) {
		flex-direction: column;
	}
`;
export { StyledContainer };
