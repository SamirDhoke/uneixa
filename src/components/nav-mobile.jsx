import { Link } from 'react-router-dom';
import { navLinks } from '../utils/data.js';

import './nav-mobile.css';

function NavMobile({ selected, setSelected, ...props }) {
	return (
		<div className='nav-mobile'>
			<ul>
	          { 
	            Object
	            .keys(navLinks)
	            .map(
	              key => (
	                <li 
	                  key={key} 
	                  className={ selected === key ? 'active' : '' } 
	                  data-navtitle={key}
	                  onClick={() => setSelected(key)}
	                  >
	                  <Link to={`/${key}`}>
	                    {navLinks[key]}
	                  </Link>
	                </li> 
	              )
	            ) 
	          }
	        </ul>
		</div>
	)
}

export default NavMobile;