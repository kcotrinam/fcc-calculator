import operate from './operate';

const calculate = (data, buttonName) => {
	let { total, next, operation } = data;

	if (buttonName === 'AC') {
		total = '0';
		next = '0';
		operation = '';
		return { total, next, operation };
	}

	if (buttonName === '+/-' && next) {
		next = next * -1;
		return { total, next, operation };
	} else if (buttonName === '+/-' && total) {
		total = total * -1;
		return { total, next, operation };
	}

	if (
		total &&
		(buttonName === '+' ||
			buttonName === '-' ||
			buttonName === 'x' ||
			buttonName === '/')
	) {
		operation = buttonName;
		return { total, next, operation };
	}

	if (buttonName === '=') {
		total = operate(total, next, operation).toString();
		next = '';
		operation = '';
		return { total, next, operation };
	}

	if (!operation && /^[0-9]+/.test(buttonName) && !total.includes('.')) {
		total = buttonName;
		return { total, next, operation };
	} else if (!operation && /^[0-9]+/.test(buttonName) && total !== '0') {
		total += buttonName;
		return { total, next, operation };
	} else if (operation && /^[0-9]+/.test(buttonName)) {
		next = buttonName;
		return { total, next, operation };
	} else if (operation && /^[0-9]+/.test(buttonName) && next !== '0') {
		next += buttonName;
		return { total, next, operation };
	}

	if (buttonName == '.' && !total && !operation) {
		total = '0.';
		return { total, next, operation };
	} else if (buttonName == '.' && operation && !next) {
		next = '0.';
		return { total, next, operation };
	} else if (total && buttonName === '.' && !total.includes('.')) {
		total += '.';
		return { total, next, operation };
	} else if (buttonName === '.' && !next.includes('.')) {
		next += '.';
		return { total, next, operation };
	} else if (total.includes('.') || next.includes('.')) {
		return { total, next, operation };
	}
};

export default calculate;
