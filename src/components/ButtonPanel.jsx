import React from 'react';
import Button from './Button';

const BUTTONGROUP = {
	group1: [
		{
			name: 'clear',
			value: 'AC',
		},
		{
			name: 'negation',
			value: '+/-',
		},
		{
			name: 'percentage',
			value: '%',
		},
		{
			name: 'div',
			value: '/',
		},
	],
	group2: [
		{
			name: 'seven',
			value: '7',
		},
		{
			name: 'eight',
			value: '8',
		},
		{
			name: 'nine',
			value: '9',
		},
		{
			name: 'multiply',
			value: 'x',
		},
	],
	group3: [
		{
			name: 'four',
			value: '4',
		},
		{
			name: 'five',
			value: '5',
		},
		{
			name: 'six',
			value: '6',
		},
		{
			name: 'substract',
			value: '-',
		},
	],
	group4: [
		{
			name: 'one',
			value: '1',
		},
		{
			name: 'two',
			value: '2',
		},
		{
			name: 'three',
			value: '3',
		},
		{
			name: 'add',
			value: '+',
		},
	],
	group5: [
		{
			name: 'zeri',
			value: '0',
		},
		{
			name: 'decimal',
			value: '.',
		},
		{
			name: 'equals',
			value: '=',
		},
	],
};

const ButtonPanel = ({ handleClick }) => {
	const renderButtons = (group) =>
		group.map((name) => (
			<Button
				key={name.value}
				idValue={name.name}
				name={name.value}
				handleClick={handleClick}
			/>
		));

	const { group1, group2, group3, group4, group5 } = BUTTONGROUP;

	return (
		<>
			<div className='panel-button'>
				<div className='row'>{renderButtons(group1)}</div>
				<div className='row'>{renderButtons(group2)}</div>
				<div className='row'>{renderButtons(group3)}</div>
				<div className='row'>{renderButtons(group4)}</div>
				<div className='row'>{renderButtons(group5)}</div>
			</div>
		</>
	);
};

export default ButtonPanel;
