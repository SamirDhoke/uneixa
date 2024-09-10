import {useState} from 'react';
import Card from './card.jsx';
import './card-stack.css';

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
				Array(3)
					.fill(null)
					.map(
						(_, idx) => {
							return (
								<Card 
									styles={{
										top: `${calculatePos(idx + 1)}px`,
										left: `${calculatePos(idx + 1)}px`,
										backgroundColor: `hsl(0, 0%, ${(3 - idx + 1) * 10}%)`
									}}
									/>	
							)	
						}
					)
			}
		</div>	
	)
}


export default CardStack;