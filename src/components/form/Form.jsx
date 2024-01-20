import { useForm } from 'react-hook-form';
import { FORM_VALIDATIONS } from '../../constants/validations';
import { useState } from 'react';

const Form = () => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm();

	const [data, setData] = useState({});
	console.log(data);
	return (
		<>
			<form onSubmit={data => handleSubmit(formSubmit(data, setData))}>
				<div>
					<label htmlFor='name'>CARDHOLDER NAME</label>
					<input
						id='name'
						type='text'
						name='name'
						{...register('name', FORM_VALIDATIONS.NAME)}
					></input>
					<span>{errors?.name?.message}</span>
				</div>
				<div>
					<label htmlFor='number'>CARD NUMBER</label>
					<input
						id='number'
						type='text'
						name='number'
						maxLength={16}
						{...register('number', FORM_VALIDATIONS.NUMBER)}
					></input>
					<span>{errors?.number?.message}</span>
				</div>
				<div>
					<label htmlFor='month'> EXP. DATE MONTH</label>
					<input
						id='month'
						type='text'
						name='month'
						maxLength={2}
						max='12'
						pattern='^(0?[1-9]|1[0-2])$'
						{...register('month', FORM_VALIDATIONS.MONTH)}
					></input>
					<span>{errors?.month?.message}</span>
				</div>
				<div>
					<label htmlFor='year'>EXP. DATE YEAR</label>
					<input
						id='year'
						type='text'
						name='year'
						maxLength={2}
						{...register('year', FORM_VALIDATIONS.YEAR)}
					></input>
					<span>{errors?.year?.message}</span>
				</div>
				<div>
					<label htmlFor='cvv'>CVV</label>
					<input
						id='cvv'
						type='text'
						name='cvv'
						maxLength={3}
						{...register('cvv', FORM_VALIDATIONS.CVV)}
					></input>
					<span>{errors?.cvv?.message}</span>
				</div>
				<button>confirm</button>
			</form>
			{/* <p>{JSON.stringify(data)}</p> */}
		</>
	);
};
const formSubmit = (data, setData) => {
	setData(data);
	console.log(data);
};

export default Form;
