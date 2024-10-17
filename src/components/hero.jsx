import Button from './button.jsx';
import { Link } from 'react-router-dom';
import './hero.css';

function Hero(props) {
	return (
		<div className='hero-section'>
			<div className='hero-card'>				
				<h1>Uneixa Lifesciences</h1>
				<p>Science for a Healthier Tomorrow</p>
				<Button><Link to='/about'>Know More</Link></Button>
			</div>
			<img src="https://i.ibb.co/pxqz1NL/kids-having-fun-jungle-themed-party.jpg"/>
		</div>		
	)
}

export default Hero;

