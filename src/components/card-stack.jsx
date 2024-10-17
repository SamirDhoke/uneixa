import { useState, useEffect } from 'react';
import Card from './card.jsx';
import Button from './button.jsx';
import './card-stack.css';
import chevronRight from '../assets/chevron-right.svg'

const solutions = [
	{
		id: 1,
		title: 'Our solutions',
		desc: 'Identifying and developing new medications to treat various diseases, including chronic conditions, infectious diseases, and rare disorders.'
	},
	{
		id: 2,
		title: 'Our Promise',
		desc: 'Offering both innovative brand-name drugs and cost-effective generic versions to make treatments more accessible to patients.'
	},
	{
		id: 3,
		title: 'Our Technology',
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

	const [cards, setCards] = useState([]);
	const [fade, setFade] = useState(false);

	const rotate = () => {

		const last = cards[cards.length - 1]
		const rest = cards.slice(0, cards.length - 1)
		const newCards = [last].concat(rest)

		console.log('cards', cards, 'rotated', newCards)

		setCards(newCards);
		setFade(false)
	}

	const rotateWrapper = () => {
		setFade(true);

		setTimeout(() => {
			rotate()
		}, 1000);
	}

	useEffect(() => {

		const newCards = solutions.map(
			(sol, idx) => ({
				...sol,
				z: idx + 1,
				styles : {
					top: `${calculatePos(idx + 1)}px`,
					left: `${calculatePos(idx + 1)}px`,
					backgroundColor: `hsl(360, 0%, ${100 - ((idx + 1) * 10)}%)`
				}
			})
		)

		setCards(newCards)

	}, [])


	return (
		<>
		<div className='card-stack-wrapper'>
			<div className='card-stack'>
			{
				cards
					.map(
						(sol, idx) => {
							if (idx != cards.length - 1) {
								return (
									<Card {...sol} key={sol.id} />	
								)	
							}

							return (
								<Card {...sol} key={sol.id} animate={fade} />	
							)	
						}
					)
			}
			</div>			
		</div>
		<div className='carousal-indicator'>
			<span className='indicator' onClick={rotateWrapper}>
				<img src={chevronRight} style={{ height: 25, width: 25}}/>
			</span>
		</div>
		</>
	)
}


export default CardStack;