import { useState } from 'react';
import calculate from '../logic/calculate';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

const App = () => {
	const [value, setValue] = useState({
		total: '',
		next: '',
		operation: '',
	});

	const clickHandler = (buttonName) => {
		const newResult = calculate(value, buttonName);
		setValue({
			...newResult,
		});
	};

	return (
		<>
			<Display results={value.operation ? value.next : value.total} />
			<ButtonPanel handleClick={clickHandler} />
		</>
	);
};

export default App;
