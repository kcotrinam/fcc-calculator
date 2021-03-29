import operate from './operate';

const calculate = (data, buttonName) => {
	let { total, next, operation } = data;

	if (buttonName === 'AC') {
		total = null;
		next = null;
		operation = null;
		return { total, next, operation };
	}

	if (buttonName === '+/-' && next) {
		next = next * -1;
		console.log(next);
	} else if (buttonName === '+/-' && total) {
		total = total * -1;
		console.log(total);
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

	if (buttonName === '.' && (!total || total === '0')) {
		total = '0.';
		return { total, next, operation };
	} else if (buttonName === '.' && total && !next) {
		next = '0.';
		return { total, next, operation };
	}

	if (buttonName === '=') {
		total = operate(total, next, operation).toString();
		next = null;
		operation = null;
		return { total, next, operation };
	}

	if (!operation && total) {
		console.log(/^[0-9]+/.test(buttonName));
		total += buttonName;
		return { total, next, operation };
	} else if (!operation && !total) {
		console.log(/^[0-9]+/.test(buttonName));
		total = buttonName;
		console.log(total);
		return { total, next, operation };
	}

	if (operation && next) {
		next += buttonName;
		return { total, next, operation };
	} else if (operation && !next) {
		next = buttonName;
		return { total, next, operation };
	}
};

export default calculate;
