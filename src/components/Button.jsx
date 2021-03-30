const Button = ({ name, idValue, handleClick }) => {
	return (
		<button className='btn' id={idValue} onClick={() => handleClick(name)}>
			{name}
		</button>
	);
};
export default Button;
