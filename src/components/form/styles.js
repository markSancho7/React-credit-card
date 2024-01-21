import { styled } from 'styled-components';

const StyledContainerForm = styled.div`
	margin-top: 200px;
	width: 50%;
	display: flex;
	@media (max-width: 900px) {
		justify-content: center;
		margin-left: -50px;
	}
`;

const StyledForm = styled.form`
	width: 381px;
	height: 500px;
	display: flex;
	flex-direction: column;
	padding: 10px;
	align-items: center;
`;
const StyledContainerInputLabel = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 10px;
`;

const StyledInput = styled.input`
	border-radius: 8px;
	width: 350px;
	border: 1px solid var(--Light-Grey, #dfdee0);
	background: var(--White, #fff);
	height: 40px;
`;

const StyledLabel = styled.label`
	color: var(--Deep-Violet, #21092f);
	font-feature-settings: 'clig' off, 'liga' off;
	font-family: 'Space Grotesk';
	font-size: 12px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: 2px;
	text-transform: uppercase;
`;
const StyledSpan = styled.span`
	margin-top: 5px;
	color: var(--Red, #ff5050);
	font-feature-settings: 'clig' off, 'liga' off;

	/* Body (S) */
	font-family: 'Space Grotesk';
	font-size: 12px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
`;

const StyledButton = styled.button`
	margin-top: 20px;
	padding: 10px;
	width: 350px;
	border-radius: 8px;
	background: var(--Deep-Violet, #21092f);
	color: white;
	font-family: 'Space Grotesk';
`;

export {
	StyledForm,
	StyledInput,
	StyledLabel,
	StyledContainerInputLabel,
	StyledButton,
	StyledSpan,
	StyledContainerForm
};
