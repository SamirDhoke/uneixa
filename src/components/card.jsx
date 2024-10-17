import './card.css';
import Button from './button.jsx';

// defaultStyle = { 
// 	top: `${-num * 10}px`, 
// 	left: `${num * 10}px`,
// 	backgroundColor: `hsl(0, 0%, ${(num + 1) * 20}%)`,  
// }

function Card({ 
	styles={}, 
	title='Our Solution', 
	desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
	actionText='Read More',
	animate=false,
	...props
}) {
	return (
		<div className={`card ${animate ? 'fade' : ''}`} style={styles}>
			<h1>{title}</h1>
			<p>{desc}</p>
			<Button>{actionText}</Button>
		</div>	
	)
}

export default Card;