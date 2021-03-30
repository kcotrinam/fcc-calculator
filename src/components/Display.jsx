const Display = ({ results }) => {
	results = results ? results : '0';
	return <h1 id='display'>{results}</h1>;
};

export default Display;
