import calculate from '../logic/calculate';
import ButtonPanel from './ButtonPanel';

console.log(calculate({ total: '2.2', next: '2', operation: '+' }, '='));

const App = () => {
	return <ButtonPanel />;
};

export default App;
