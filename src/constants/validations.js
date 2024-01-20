const messages = {
	name: {
		required: 'El nombre es obligatorio',
		wrong: 'El nombre no es valido'
	},
	number: {
		required: 'El numero de tarjeta es obligatorio',
		wrong: 'El numero de tarjeta no es valido'
	},
	month: {
		required: 'El mes es obligatorio',
		wrong: 'El mes no es valido'
	},
	year: {
		required: 'El año es obligatorio',
		wrong: 'El año no es valido'
	},
	cvv: {
		required: 'El CVV es obligatorio',
		wrong: 'El CVV no es valido'
	}
};
const patterns = {
	onlyLetters: /^[a-z]+$/,
	onlyNumbers: /^[0-9]+$/
};

const nameValidation = {
	required: messages.name.required,
	pattern: {
		value: patterns.onlyLetters,
		message: messages.name.wrong
	}
};
const numberValidation = {
	required: messages.number.required,
	pattern: {
		value: patterns.onlyNumbers,
		message: messages.number.wrong
	}
};
const monthValidation = {
	required: messages.month.required,
	pattern: {
		value: patterns.onlyNumbers,
		message: messages.month.wrong
	}
};
const yearValidation = {
	required: messages.year.required,
	pattern: {
		value: patterns.onlyNumbers,
		message: messages.year.wrong
	}
};
const cvvValidation = {
	required: messages.cvv.required,
	pattern: {
		value: patterns.onlyNumbers,
		message: messages.cvv.wrong
	}
};

export const FORM_VALIDATIONS = {
	NAME: nameValidation,
	NUMBER: numberValidation,
	MONTH: monthValidation,
	YEAR: yearValidation,
	CVV: cvvValidation
};
