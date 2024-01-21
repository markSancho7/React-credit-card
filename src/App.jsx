import { useForm } from 'react-hook-form';
import CreditCard from './components/creditCard/CreditCard';
import Form from './components/form/Form';
import { StyledContainer } from './components/container/styles';

const App = () => {
	const {
		handleSubmit,
		register,
		watch,
		formState: { errors }
	} = useForm();

	const formValues = watch();

	return (
		<StyledContainer>
			<CreditCard formValues={formValues} />
			<Form register={register} handleSubmit={handleSubmit} errors={errors} />
		</StyledContainer>
	);
};

export default App;
