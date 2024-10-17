import './footer.css';
import facebookLogo from '../assets/facebook.svg'
import instaLogo from '../assets/insta.svg'
import xLogo from '../assets/x.svg'

import { Link } from 'react-router-dom';

const Footer = (props) => {
	return (
		<footer>
			<div className='footer-main-flex'>
				<div className='about sec'>
					<h3>About</h3>
					<p><Link to='/about'>Who we are</Link></p>					
				</div>
				<div className='contact sec'>
					<h3>Contact</h3>
					<p><Link to='/contact'>Offices</Link></p>
				</div>
				<div className='logo'>
					<h2>Uneixa</h2>
					<div className='social'>
						<span>
							<img src={facebookLogo}/>
							{/* <facebookLogo/> */}
						</span>
						<span>
							<img src={instaLogo}/>
						</span>
						<span>
							<img src={xLogo}/>
						</span>
					</div>
				</div>
			</div>
			<p className='copyright'>Copyright 2024, Uneixa Lifesciences</p>
		</footer>
	)
}

export default Footer