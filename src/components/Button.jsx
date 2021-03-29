const Button = ({ name, handleClick }) => {
	return <button onClick={() => handleClick(name)}>{name}</button>;
};
export default Button;
