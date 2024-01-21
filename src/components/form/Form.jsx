import { FORM_VALIDATIONS } from '../../constants/validations';
import {
	StyledButton,
	StyledContainerForm,
	StyledContainerInputLabel,
	StyledForm,
	StyledInput,
	StyledLabel,
	StyledSpan
} from './styles';

const Form = ({ register, handleSubmit, errors }) => {
	return (
		<StyledContainerForm>
			<StyledForm onSubmit={handleSubmit(formSubmit)}>
				<StyledContainerInputLabel>
					<StyledLabel htmlFor='name'>CARDHOLDER NAME</StyledLabel>
					<StyledInput
						id='name'
						type='text'
						name='name'
						{...register('name', FORM_VALIDATIONS.NAME)}
					></StyledInput>
					<StyledSpan>{errors?.name?.message}</StyledSpan>
				</StyledContainerInputLabel>
				<StyledContainerInputLabel>
					<StyledLabel htmlFor='number'>CARD NUMBER</StyledLabel>
					<StyledInput
						id='number'
						type='text'
						name='number'
						maxLength={16}
						{...register('number', FORM_VALIDATIONS.NUMBER)}
					></StyledInput>
					<StyledSpan>{errors?.number?.message}</StyledSpan>
				</StyledContainerInputLabel>
				<StyledContainerInputLabel>
					<StyledLabel htmlFor='month'> EXP. DATE MONTH</StyledLabel>
					<StyledInput
						id='month'
						type='text'
						name='month'
						maxLength={2}
						max='12'
						pattern='^(0?[1-9]|1[0-2])$'
						{...register('month', FORM_VALIDATIONS.MONTH)}
					></StyledInput>
					<StyledSpan>{errors?.month?.message}</StyledSpan>
				</StyledContainerInputLabel>
				<StyledContainerInputLabel>
					<StyledLabel htmlFor='year'>EXP. DATE YEAR</StyledLabel>
					<StyledInput
						id='year'
						type='text'
						name='year'
						maxLength={2}
						{...register('year', FORM_VALIDATIONS.YEAR)}
					></StyledInput>
					<StyledSpan>{errors?.year?.message}</StyledSpan>
				</StyledContainerInputLabel>
				<StyledContainerInputLabel>
					<StyledLabel htmlFor='cvv'>CVV</StyledLabel>
					<StyledInput
						id='cvv'
						type='text'
						name='cvv'
						maxLength={3}
						{...register('cvv', FORM_VALIDATIONS.CVV)}
					></StyledInput>
					<StyledSpan>{errors?.cvv?.message}</StyledSpan>
				</StyledContainerInputLabel>
				<StyledButton>Confirm</StyledButton>
			</StyledForm>
		</StyledContainerForm>
	);
};
const formSubmit = data => {
	console.log(data);
};

export default Form;
