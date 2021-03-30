import { useState } from 'react';
import calculate from '../logic/calculate';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import '../scss/styles.scss';

const App = () => {
	const [value, setValue] = useState({
		total: null,
		next: null,
		operation: null,
	});

	const clickHandler = (buttonName) => {
		const newResult = calculate(value, buttonName);
		setValue({
			...newResult,
		});
	};

	return (
		<div className='calculator-container'>
			<Display results={value.operation ? value.next : value.total} />
			<ButtonPanel handleClick={clickHandler} />
		</div>
	);
};

export default App;
