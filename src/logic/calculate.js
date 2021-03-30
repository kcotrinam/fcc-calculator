import operate from './operate';

const calculate = (data, buttonName) => {
	let { total, next, operation } = data;

	switch (buttonName) {
		case 'AC':
			total = null;
			next = null;
			operation = null;
			return { total, next, operation };

		case '+':
		case '-':
		case '/':
		case 'x':
			if ((total, next)) {
				total = operate(total, next, operation).toString();
				next = null;
				operation = buttonName;
				return { total, next, operation };
			}
			operation = buttonName;
			return { total, next, operation };

		case '=':
			total = operate(total, next, operation).toString();
			next = null;
			operation = null;
			return { total, next, operation };

		case '0':
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '7':
		case '8':
		case '9':
			if (!operation) {
				if (buttonName === '0' && total === null) {
					total = null;
					return { total, next, operation };
				}
				if (!total || total === '0') {
					total = buttonName;
					return { total, next, operation };
				} else {
					total += buttonName;
					return { total, next, operation };
				}
			} else if (operation) {
				if (buttonName === '0' && (next === null) === '0') {
					total = null;
					return { total, next, operation };
				}
				if (!next || next === '0') {
					next = buttonName;
					return { total, next, operation };
				} else {
					next += buttonName;
					return { total, next, operation };
				}
			}
	}
};

export default calculate;
