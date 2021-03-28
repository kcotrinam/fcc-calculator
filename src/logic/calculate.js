import operate from './operate';

const calculate = (data, buttonName) => {
	let { total, next, operation } = data;

	if (
		total &&
		(buttonName === '+' ||
			buttonName === '-' ||
			buttonName === 'X' ||
			buttonName === '/')
	) {
		operation = buttonName;
		return { total, next, operation };
	}

	if (buttonName === '.' && !total) {
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
		total += buttonName;
		return { total, next, operation };
	} else if (!operation && !total) {
		total = buttonName;
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

// This method should use the buttonName argument to mutate the calculator’s data object and return its modified version.
//For instance if buttonName == "+/-", it should multiply total and next by -1 to make it negative or positive.
