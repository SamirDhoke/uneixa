import './card-grid.css';
import CardSmall from './card-small.jsx'

const CardGrid = ({ cards=[], ...props }) => {

	return (
		<div className='card-grid'>
			{
				cards.map( card => (
					<CardSmall {...card} key={card.id}/>	
				) )
			}      		
    	</div>		
	)
}

export default CardGrid;