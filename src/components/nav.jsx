import { useState, useEffect } from 'react';

import { navLinks } from '../utils/data.js';
import { Link } from 'react-router-dom';

import menuClose from '../assets/menu-close.svg';
import menuOpen from '../assets/menu-open.svg';

import './nav.css'

function Nav( props ) {

  const [selected, setSelected] = useState( 'home' );
  const [isMobile, setIsMobile] = useState(false);

  const handleLinkClick = (e) => {
    setSelected(e.target.dataset.navtitle)
  }

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile( true );
      } else if (isMobile) {
        setIsMobile( false );
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  
  }, []);


  console.log('selected', selected);

  return (
    <nav>
      <div className='logo'>
        <h1>Uneixa</h1>
      </div>
      <div className='links'>
        { !isMobile ? (
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
        ) : (
          <img src={menuOpen} style={{ height: 32, width: 32, marginRight: 16 }}/>
        )}
        
      </div>
    </nav>
  )
}

export default Nav;