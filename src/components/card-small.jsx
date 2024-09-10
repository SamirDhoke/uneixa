import Button from './button.jsx';
import './card-small.css'

const CardSmall = ({
	title='Our Solution', 
	desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
	actionText='Read More', 
	...props
}) => {
	return (
		<div className='card'>
			<h1>{title}</h1>
			<p>{desc}</p>
			<Button>{actionText}</Button>
		</div>		
	)
}

export default CardSmall;