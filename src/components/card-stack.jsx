import {useState} from 'react';
import Card from './card.jsx';
import './card-stack.css';

const solutions = [
	{
		id: 1,
		title: 'Our solutions',
		desc: 'Identifying and developing new medications to treat various diseases, including chronic conditions, infectious diseases, and rare disorders.'
	},
	{
		id: 2,
		title: 'Our solutions',
		desc: 'Offering both innovative brand-name drugs and cost-effective generic versions to make treatments more accessible to patients.'
	},
	{
		id: 3,
		title: 'Our solutions',
		desc: 'Creating advanced biologic drugs and biosimilars for complex conditions like cancer, autoimmune disorders, and diabetes.'
	}	
]

const calculatePos = (distance) => {
	const guess = Math.random();

	if (guess > 0.5) {
		return -5 * distance;
	} else {
		return 5 * distance;
	}
}

const CardStack = (props) => {
	return (
		<div className='card-stack'>
			{
				solutions
					.map(
						(sol, idx) => {
							return (
								<Card 
									styles={{
										top: `${calculatePos(idx + 1)}px`,
										left: `${calculatePos(idx + 1)}px`,
										backgroundColor: `hsl(0, 0%, ${(3 - idx + 1) * 10}%)`
									}}
									{...sol}
									key={sol.id}
									/>	
							)	
						}
					)
			}
		</div>	
	)
}


export default CardStack;