const operate = (numberOne, numberTwo, operation) => {
	let result = 0;
	switch (operation) {
		case '+':
			result = numberOne + numberTwo;
			break;
		case '-':
			result = numberOne - numberTwo;
			break;
		case 'x':
			result = numberOne * numberTwo;
			break;
		case '/':
			result = numberOne / numberTwo;
			break;
		default:
			result = 'Error: Operation not found';
			break;
	}
	return result.toString();
};

export default operate;
